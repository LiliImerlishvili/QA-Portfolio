# TC-006 — Verify Permanent Document Deletion

## Related Defect

- BR-006

## Objective

Verify permanently deleted documents disappear from all active views.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open the document list.
2. Move a document to Trash.
3. Open Trash.
4. Permanently delete the document.
5. Return to the workspace.

## Expected Result

The document should disappear from all active views after permanent deletion.

## Status

Not Executed
