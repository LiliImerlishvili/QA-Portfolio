#!/usr/bin/env python3
"""
Extract real Postman test scripts from an exported Postman Collection and
publish them as readable, endpoint-based JavaScript files in a QA portfolio.

This script does NOT invent or replace tests. It extracts the scripts that
already exist inside the Postman collection.

Examples:
    python3 extract_postman_test_scripts.py --repo .
    python3 extract_postman_test_scripts.py --repo ~/Desktop/QA-Portfolio
    python3 extract_postman_test_scripts.py --repo . --collection "API-Testing/Postman-Collections/My.postman_collection.json"
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Iterable


INVALID_FILENAME_CHARS = re.compile(r'[<>:"/\\|?*\x00-\x1f]')
MULTIPLE_DASHES = re.compile(r"-{2,}")


@dataclass
class ExtractedScript:
    folder_parts: list[str]
    request_name: str
    method: str
    url: str
    script_type: str
    source: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Extract actual Postman test scripts into a professional "
            "GitHub-friendly folder structure."
        )
    )
    parser.add_argument(
        "--repo",
        default=".",
        help="Path to the QA portfolio repository. Default: current directory.",
    )
    parser.add_argument(
        "--collection",
        help=(
            "Optional collection path, relative to the repository or absolute. "
            "When omitted, the script automatically finds a Postman collection."
        ),
    )
    parser.add_argument(
        "--output",
        default="API-Testing/Test-Scripts",
        help="Output directory relative to the repository.",
    )
    parser.add_argument(
        "--clean",
        action="store_true",
        help="Remove the existing output directory before extracting.",
    )
    return parser.parse_args()


def safe_name(value: str, fallback: str = "Unnamed") -> str:
    value = INVALID_FILENAME_CHARS.sub("-", value.strip())
    value = re.sub(r"\s+", "-", value)
    value = MULTIPLE_DASHES.sub("-", value)
    value = value.strip(".-_")
    return value or fallback


def find_collections(repo: Path) -> list[Path]:
    preferred = repo / "API-Testing" / "Postman-Collections"
    patterns = ("*.postman_collection.json", "*.json")

    results: list[Path] = []
    if preferred.exists():
        for pattern in patterns:
            results.extend(preferred.rglob(pattern))

    # Fallback search inside API-Testing only.
    if not results:
        api_dir = repo / "API-Testing"
        if api_dir.exists():
            for pattern in patterns:
                results.extend(api_dir.rglob(pattern))

    valid: list[Path] = []
    for path in sorted(set(results)):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue

        # Some JSON files in API-Testing may contain arrays (for example,
        # test-data files). Only dictionary-shaped JSON documents can be
        # Postman collections.
        if not isinstance(data, dict):
            continue

        info = data.get("info", {})
        if not isinstance(info, dict):
            continue

        schema = str(info.get("schema", "")).lower()
        if "postman" in schema and isinstance(data.get("item"), list):
            valid.append(path)

    return valid


def resolve_collection(repo: Path, supplied: str | None) -> Path:
    if supplied:
        path = Path(supplied).expanduser()
        if not path.is_absolute():
            path = repo / path
        path = path.resolve()

        if not path.exists():
            raise SystemExit(f"Collection was not found: {path}")
        return path

    collections = find_collections(repo)

    if not collections:
        raise SystemExit(
            "No Postman collection was found.\n"
            "Place the exported *.postman_collection.json file inside:\n"
            "API-Testing/Postman-Collections/"
        )

    if len(collections) > 1:
        print("Multiple Postman collections were found:")
        for index, path in enumerate(collections, start=1):
            print(f"  {index}. {path.relative_to(repo)}")
        raise SystemExit(
            "\nRun the command again with --collection and the required file path."
        )

    return collections[0]


def script_lines(event: dict[str, Any]) -> list[str]:
    exec_value = event.get("script", {}).get("exec", [])

    if isinstance(exec_value, str):
        return exec_value.splitlines()

    if isinstance(exec_value, list):
        return [str(line) for line in exec_value]

    return []


def stringify_url(request: dict[str, Any]) -> str:
    url = request.get("url", "")

    if isinstance(url, str):
        return url

    if isinstance(url, dict):
        raw = url.get("raw")
        if raw:
            return str(raw)

        protocol = url.get("protocol", "")
        host = url.get("host", [])
        path = url.get("path", [])

        if isinstance(host, list):
            host_text = ".".join(map(str, host))
        else:
            host_text = str(host)

        if isinstance(path, list):
            path_text = "/".join(map(str, path))
        else:
            path_text = str(path)

        prefix = f"{protocol}://" if protocol else ""
        return f"{prefix}{host_text}/{path_text}".rstrip("/")

    return ""


def extract_from_items(
    items: Iterable[dict[str, Any]],
    folder_parts: list[str] | None = None,
) -> list[ExtractedScript]:
    folder_parts = folder_parts or []
    extracted: list[ExtractedScript] = []

    for item in items:
        name = str(item.get("name", "Unnamed Request"))

        if isinstance(item.get("item"), list):
            extracted.extend(
                extract_from_items(
                    item["item"],
                    folder_parts + [name],
                )
            )
            continue

        request = item.get("request")
        if not isinstance(request, dict):
            continue

        method = str(request.get("method", "REQUEST")).upper()
        url = stringify_url(request)

        for event in item.get("event", []):
            if not isinstance(event, dict):
                continue

            listen = str(event.get("listen", "")).lower()
            if listen not in {"test", "prerequest"}:
                continue

            lines = script_lines(event)
            source = "\n".join(lines).strip()

            if not source:
                continue

            extracted.append(
                ExtractedScript(
                    folder_parts=folder_parts,
                    request_name=name,
                    method=method,
                    url=url,
                    script_type=listen,
                    source=source,
                )
            )

    return extracted


def unique_path(base: Path, filename: str) -> Path:
    candidate = base / filename
    if not candidate.exists():
        return candidate

    stem = candidate.stem
    suffix = candidate.suffix
    counter = 2

    while True:
        candidate = base / f"{stem}-{counter}{suffix}"
        if not candidate.exists():
            return candidate
        counter += 1


def create_file_content(script: ExtractedScript) -> str:
    heading = "Postman Test Script" if script.script_type == "test" else "Postman Pre-request Script"

    metadata = [
        "/**",
        f" * {heading}",
        f" * Request: {script.request_name}",
        f" * Method: {script.method}",
    ]

    if script.url:
        metadata.append(f" * Endpoint: {script.url}")

    metadata.extend(
        [
            " *",
            " * Extracted automatically from the sanitized Postman collection.",
            " * The JavaScript below is the original collection script.",
            " */",
            "",
        ]
    )

    return "\n".join(metadata) + script.source.rstrip() + "\n"


def write_index(
    output: Path,
    collection_name: str,
    entries: list[tuple[ExtractedScript, Path]],
) -> None:
    test_count = sum(1 for script, _ in entries if script.script_type == "test")
    pre_count = sum(1 for script, _ in entries if script.script_type == "prerequest")

    lines = [
        "# Postman Test Scripts",
        "",
        "This directory contains JavaScript extracted from the sanitized Postman collection.",
        "The files are grouped by the original Postman folder and request structure.",
        "",
        f"**Source collection:** `{collection_name}`",
        "",
        "## Summary",
        "",
        f"- Test script files: {test_count}",
        f"- Pre-request script files: {pre_count}",
        f"- Total extracted files: {len(entries)}",
        "",
        "## Scripts",
        "",
        "| Method | Request | Type | File |",
        "|---|---|---|---|",
    ]

    for script, path in entries:
        relative = path.relative_to(output).as_posix()
        request_name = script.request_name.replace("|", r"\|")
        lines.append(
            f"| `{script.method}` | {request_name} | "
            f"`{script.script_type}` | [{relative}](./{relative}) |"
        )

    lines.extend(
        [
            "",
            "## Notes",
            "",
            "- No credentials or tokens should be included in these files.",
            "- The scripts are extracted from the collection rather than recreated manually.",
            "- Request-specific assertions remain separated so reviewers can inspect real testing coverage.",
            "",
        ]
    )

    (output / "README.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> None:
    args = parse_args()
    repo = Path(args.repo).expanduser().resolve()

    if not repo.exists():
        raise SystemExit(f"Repository path does not exist: {repo}")

    collection_path = resolve_collection(repo, args.collection)

    try:
        collection = json.loads(collection_path.read_text(encoding="utf-8"))
    except json.JSONDecodeError as exc:
        raise SystemExit(f"Invalid collection JSON: {exc}") from exc

    output = Path(args.output)
    if not output.is_absolute():
        output = repo / output
    output = output.resolve()

    if args.clean and output.exists():
        shutil.rmtree(output)

    output.mkdir(parents=True, exist_ok=True)

    scripts = extract_from_items(collection.get("item", []))

    if not scripts:
        raise SystemExit(
            "No request-level test or pre-request scripts were found in the collection.\n"
            "Open Postman, confirm that the requests contain scripts, export the collection again, "
            "and rerun this command."
        )

    written: list[tuple[ExtractedScript, Path]] = []

    for script in scripts:
        folder = output
        for part in script.folder_parts:
            folder = folder / safe_name(part, "Folder")

        folder.mkdir(parents=True, exist_ok=True)

        type_suffix = "Tests" if script.script_type == "test" else "Pre-request"
        filename = safe_name(
            f"{script.method}-{script.request_name}-{type_suffix}",
            "Postman-Script",
        ) + ".js"

        target = unique_path(folder, filename)
        target.write_text(create_file_content(script), encoding="utf-8")
        written.append((script, target))

    collection_name = str(collection.get("info", {}).get("name", collection_path.name))
    write_index(output, collection_name, written)

    print(f"Repository: {repo}")
    print(f"Collection: {collection_path}")
    print(f"Output: {output}")
    print("-" * 72)

    for _, path in written:
        print(f"CREATED  {path.relative_to(repo)}")

    print(f"CREATED  {(output / 'README.md').relative_to(repo)}")
    print("-" * 72)
    print(f"Successfully extracted {len(written)} real Postman script file(s).")
    print()
    print("Next commands:")
    print("  git status")
    print("  git add API-Testing")
    print('  git commit -m "Add request-specific Postman test scripts"')
    print("  git push")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit("\nCancelled.")
