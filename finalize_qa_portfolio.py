#!/usr/bin/env python3
"""
Clean and rebuild a focused QA Portfolio without publishing sensitive data.

What it does:
1. Creates a timestamped backup.
2. Removes unsupported portfolio sections:
   CI-CD, Learning-Path, Performance-Testing, Security-Testing.
3. Validates the sanitized Postman collection.
4. Extracts a curated set of REAL request-level Postman scripts.
5. Creates a professional API-Testing README and Test-Scripts README.
6. Removes temporary Python helper files from the repository root.
7. Scans the resulting API section for common sensitive-data patterns.

Default mode is DRY RUN. Use --apply to write changes.

Usage:
    python3 finalize_qa_portfolio.py --repo "$(pwd)"
    python3 finalize_qa_portfolio.py --repo "$(pwd)" --apply
"""

from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path
from typing import Any, Iterable


REMOVE_DIRS = [
    "CI-CD",
    "Learning-Path",
    "Performance-Testing",
    "Security-Testing",
]

TEMP_PYTHON_FILES = [
    "create_api_testing_portfolio.py",
    "extract_postman_test_scripts.py",
    "extract_postman_test_scripts_fixed.py",
    "extract_postman_test_scripts_fixed (1).py",
]

CURATED_KEYWORDS = {
    "Authentication": [
        "authenticate", "auth user", "verify user", "token", "login", "pin"
    ],
    "Email-Verification": [
        "email exists", "verify email"
    ],
    "User-Profile": [
        "get user profile", "update user profile", "profile"
    ],
    "Image-Generation": [
        "image generation", "generate image", "image generate", "text to image"
    ],
    "Image-Editing": [
        "edit image", "search replace", "search recolor",
        "replace background", "upscale"
    ],
    "Video-Generation": [
        "video generation", "generate video", "veo"
    ],
    "Negative-Testing": [
        "missing", "invalid", "empty", "negative", "unauthorized"
    ],
    "Business-Rules": [
        "subscription quota", "quota", "organization", "template token"
    ],
}

SUSPICIOUS_PATTERNS = [
    ("JWT-like token", re.compile(r"\beyJ[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b")),
    ("Bearer literal", re.compile(r"Bearer\s+(?!\{\{|\$|PLACEHOLDER)[A-Za-z0-9._-]{20,}", re.I)),
    ("Private key", re.compile(r"-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----")),
    ("AWS access key", re.compile(r"\bAKIA[0-9A-Z]{16}\b")),
    ("Generic secret assignment", re.compile(
        r'(?i)"?(?:password|secret|api[_-]?key|access[_-]?token|refresh[_-]?token)"?\s*[:=]\s*"?(?!\{\{|PLACEHOLDER|example|test)[^"\s]{8,}'
    )),
]

SAFE_DOMAIN_MARKERS = (
    "{{domain}}",
    "{{baseUrl}}",
    "{{base_url}}",
    "example.test",
    "example.com",
    "schema.getpostman.com",
    "wikipedia.org",
)

INVALID_FILENAME = re.compile(r'[<>:"/\\|?*\x00-\x1f]')


@dataclass
class ScriptItem:
    path_parts: list[str]
    request_name: str
    method: str
    url: str
    kind: str
    source: str


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", default=".")
    parser.add_argument("--apply", action="store_true")
    return parser.parse_args()


def safe_name(value: str) -> str:
    value = INVALID_FILENAME.sub("-", value.strip())
    value = re.sub(r"\s+", "-", value)
    value = re.sub(r"-{2,}", "-", value)
    return value.strip(".-_") or "Unnamed"


def load_collection(repo: Path) -> tuple[Path, dict[str, Any]]:
    candidates = sorted(
        (repo / "API-Testing").rglob("*.postman_collection.json")
    )
    if not candidates:
        raise SystemExit(
            "Postman collection was not found under API-Testing."
        )

    preferred = [
        p for p in candidates
        if "sanitized" in p.name.lower()
    ]
    path = preferred[0] if preferred else candidates[0]

    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict) or not isinstance(data.get("item"), list):
        raise SystemExit(f"Invalid Postman collection: {path}")

    return path, data


def event_source(event: dict[str, Any]) -> str:
    value = event.get("script", {}).get("exec", [])
    if isinstance(value, str):
        return value.strip()
    if isinstance(value, list):
        return "\n".join(str(line) for line in value).strip()
    return ""


def url_text(request: dict[str, Any]) -> str:
    url = request.get("url", "")
    if isinstance(url, str):
        return url
    if isinstance(url, dict):
        return str(url.get("raw", ""))
    return ""


def walk_items(
    items: Iterable[dict[str, Any]],
    parents: list[str] | None = None,
) -> list[ScriptItem]:
    parents = parents or []
    results: list[ScriptItem] = []

    for item in items:
        if not isinstance(item, dict):
            continue

        name = str(item.get("name", "Unnamed"))

        if isinstance(item.get("item"), list):
            results.extend(walk_items(item["item"], parents + [name]))
            continue

        request = item.get("request")
        if not isinstance(request, dict):
            continue

        method = str(request.get("method", "REQUEST")).upper()
        url = url_text(request)

        for event in item.get("event", []):
            if not isinstance(event, dict):
                continue

            kind = str(event.get("listen", "")).lower()
            if kind not in {"test", "prerequest"}:
                continue

            source = event_source(event)
            if source:
                results.append(
                    ScriptItem(
                        path_parts=parents,
                        request_name=name,
                        method=method,
                        url=url,
                        kind=kind,
                        source=source,
                    )
                )

    return results


def select_curated(items: list[ScriptItem]) -> list[tuple[str, ScriptItem]]:
    selected: list[tuple[str, ScriptItem]] = []
    used: set[tuple[str, str, str]] = set()

    for category, keywords in CURATED_KEYWORDS.items():
        matches = []
        for item in items:
            haystack = " ".join(
                item.path_parts + [item.request_name, item.url, item.source]
            ).lower()
            score = sum(1 for keyword in keywords if keyword in haystack)
            if score:
                matches.append((score, item))

        matches.sort(
            key=lambda pair: (
                pair[0],
                "pm.test" in pair[1].source,
                len(pair[1].source),
            ),
            reverse=True,
        )

        for _, item in matches:
            key = (item.method, item.request_name, item.kind)
            if key not in used:
                selected.append((category, item))
                used.add(key)
                break

    # Guarantee a reasonable showcase even when naming differs.
    if len(selected) < 6:
        ranked = sorted(
            items,
            key=lambda item: (
                "pm.test" in item.source,
                len(re.findall(r"pm\.test\s*\(", item.source)),
                len(item.source),
            ),
            reverse=True,
        )
        for item in ranked:
            key = (item.method, item.request_name, item.kind)
            if key not in used:
                selected.append(("Additional-Examples", item))
                used.add(key)
            if len(selected) >= 8:
                break

    return selected[:8]


def scan_sensitive_text(text: str) -> list[str]:
    findings = []
    for label, pattern in SUSPICIOUS_PATTERNS:
        if pattern.search(text):
            findings.append(label)

    for match in re.findall(r"https?://[^\s\"\\]+", text):
        if not any(marker in match for marker in SAFE_DOMAIN_MARKERS):
            findings.append(f"Review URL: {match[:120]}")
    return findings


def backup(repo: Path, apply: bool) -> Path:
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
    backup_dir = repo / ".portfolio-backup" / f"final-cleanup-{stamp}"

    if apply:
        backup_dir.mkdir(parents=True, exist_ok=True)
        for name in REMOVE_DIRS + ["API-Testing", "README.md"]:
            source = repo / name
            if source.exists():
                destination = backup_dir / name
                if source.is_dir():
                    shutil.copytree(source, destination)
                else:
                    destination.parent.mkdir(parents=True, exist_ok=True)
                    shutil.copy2(source, destination)

    return backup_dir


def build_api_readme(collection_name: str, count: int) -> str:
    return f"""# API Testing

This section presents practical REST API testing work completed with Postman and JavaScript.

## Included Artifacts

- Sanitized Postman collection
- Request-level JavaScript test scripts
- Authentication and environment-variable handling
- Positive and negative API scenarios
- Response body and business-rule validation
- Sample test data
- Newman execution notes

## Main Collection

`Postman-Collections/{collection_name}`

The collection is sanitized for public portfolio use. Real credentials, tokens, production domains, personal information, and confidential identifiers are not included.

## Test Script Showcase

`Test-Scripts/` contains {count} selected scripts extracted from the real Postman collection. The examples are grouped by testing area so reviewers can inspect different validation techniques without reading the entire collection JSON.

## Security

The public portfolio uses placeholders such as:

```text
{{domain}}
{{token}}
{{authToken}}
test.user@example.com
https://files.example.test/sample-file
```

No real production secrets should be committed.
"""


def build_scripts_readme(
    collection_name: str,
    selected: list[tuple[str, ScriptItem, Path]],
    output: Path,
) -> str:
    lines = [
        "# Postman Test Script Showcase",
        "",
        f"Source collection: `{collection_name}`",
        "",
        "These files were extracted from real request-level scripts in the sanitized Postman collection.",
        "",
        "| Category | Method | Request | Script |",
        "|---|---|---|---|",
    ]

    for category, item, path in selected:
        relative = path.relative_to(output).as_posix()
        request_name = item.request_name.replace("|", r"\|")
        lines.append(
            f"| {category} | `{item.method}` | {request_name} | "
            f"[{relative}](./{relative}) |"
        )

    lines.extend([
        "",
        "The showcase is intentionally curated. The complete request coverage remains available in the Postman collection.",
        "",
    ])
    return "\n".join(lines)


def remove_readme_sections(root_readme: Path, apply: bool) -> None:
    if not root_readme.exists():
        return

    text = root_readme.read_text(encoding="utf-8")
    filtered = []
    for line in text.splitlines():
        if any(name.lower() in line.lower() for name in REMOVE_DIRS):
            continue
        filtered.append(line)

    result = "\n".join(filtered).rstrip() + "\n"
    if apply:
        root_readme.write_text(result, encoding="utf-8")


def main() -> None:
    args = parse_args()
    repo = Path(args.repo).expanduser().resolve()

    if not (repo / ".git").exists():
        raise SystemExit(f"Not a Git repository: {repo}")

    collection_path, collection = load_collection(repo)
    raw_collection = collection_path.read_text(encoding="utf-8")
    collection_findings = scan_sensitive_text(raw_collection)

    print(f"Repository: {repo}")
    print(f"Collection: {collection_path.relative_to(repo)}")
    print(f"Mode: {'APPLY' if args.apply else 'DRY RUN'}")
    print("-" * 72)

    if collection_findings:
        print("SECURITY REVIEW REQUIRED:")
        for finding in sorted(set(collection_findings))[:30]:
            print(f"  - {finding}")
        print()
        print("No files were changed.")
        print("Review the findings, sanitize the collection, and run again.")
        raise SystemExit(2)

    all_scripts = walk_items(collection.get("item", []))
    selected = select_curated(all_scripts)

    if not selected:
        raise SystemExit("No Postman test/pre-request scripts were found.")

    print(f"Real Postman scripts found: {len(all_scripts)}")
    print(f"Curated showcase scripts: {len(selected)}")

    for category, item in selected:
        print(f"  - {category}: {item.method} {item.request_name}")

    print()
    print("Directories to remove:")
    for name in REMOVE_DIRS:
        if (repo / name).exists():
            print(f"  - {name}")

    if not args.apply:
        print()
        print("Dry run complete. No changes were made.")
        print('Run again with: python3 finalize_qa_portfolio.py --repo "$(pwd)" --apply')
        return

    backup_dir = backup(repo, apply=True)

    for name in REMOVE_DIRS:
        target = repo / name
        if target.exists():
            shutil.rmtree(target)

    for name in TEMP_PYTHON_FILES:
        target = repo / name
        if target.exists():
            target.unlink()

    output = repo / "API-Testing" / "Test-Scripts"
    if output.exists():
        shutil.rmtree(output)
    output.mkdir(parents=True, exist_ok=True)

    written: list[tuple[str, ScriptItem, Path]] = []

    for category, item in selected:
        category_dir = output / safe_name(category)
        category_dir.mkdir(parents=True, exist_ok=True)

        suffix = "Tests" if item.kind == "test" else "Pre-request"
        filename = safe_name(
            f"{item.method}-{item.request_name}-{suffix}"
        ) + ".js"
        path = category_dir / filename

        counter = 2
        while path.exists():
            path = category_dir / (
                safe_name(f"{item.method}-{item.request_name}-{suffix}-{counter}")
                + ".js"
            )
            counter += 1

        header = [
            "/**",
            " * Extracted from the sanitized Postman collection.",
            f" * Category: {category}",
            f" * Request: {item.request_name}",
            f" * Method: {item.method}",
        ]
        if item.url:
            header.append(f" * Endpoint: {item.url}")
        header.extend([" */", ""])

        content = "\n".join(header) + item.source.rstrip() + "\n"
        findings = scan_sensitive_text(content)
        if findings:
            raise SystemExit(
                f"Sensitive-data review required in extracted script {filename}: "
                + ", ".join(sorted(set(findings)))
            )

        path.write_text(content, encoding="utf-8")
        written.append((category, item, path))

    collection_name = collection_path.name
    (output / "README.md").write_text(
        build_scripts_readme(collection_name, written, output),
        encoding="utf-8",
    )

    (repo / "API-Testing" / "README.md").write_text(
        build_api_readme(collection_name, len(written)),
        encoding="utf-8",
    )

    remove_readme_sections(repo / "README.md", apply=True)

    print("-" * 72)
    print(f"Backup created: {backup_dir.relative_to(repo)}")
    print("Portfolio cleanup completed.")
    print()
    print("Review:")
    print("  git status")
    print("  find API-Testing/Test-Scripts -type f")
    print()
    print("Then commit:")
    print("  git add -A")
    print('  git commit -m "Refine QA portfolio and add curated API test scripts"')
    print("  git push origin master")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        sys.exit("\nCancelled.")
