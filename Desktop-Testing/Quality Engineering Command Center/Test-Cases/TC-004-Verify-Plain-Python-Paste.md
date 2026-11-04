# TC-004 — Verify Plain Python Paste

## Related Defect

- BR-004

## Objective

Verify that pasting code inserts only plain Python text.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Preconditions

- The user is authenticated.

## Test Steps

1. Open the Python script editor.
2. Create a new script.
3. Paste plain Python code.
4. Review the editor content.

## Expected Result

Only plain Python source code should be pasted.

## Status

Not Executed
