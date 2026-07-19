# BR-004 — Python Editor Adds Syntax Highlighting Markup During Paste

## Summary

Pasting Python code into the script editor inserts style markup together with the code.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

High

## Preconditions

- The user is authenticated.
- The relevant project and feature are available.

## Steps to Reproduce

1. Open the Python script editor.
2. Create a new script.
3. Paste plain Python code.
4. Review the editor content.

## Actual Result

Style fragments and syntax-highlighting markup are inserted into the code.

## Expected Result

Only plain Python source code should be pasted.

## User or Business Impact

The pasted script becomes invalid and may not execute.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
