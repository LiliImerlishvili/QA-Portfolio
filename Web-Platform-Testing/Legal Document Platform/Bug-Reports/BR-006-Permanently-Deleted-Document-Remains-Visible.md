# BR-006 — Permanently Deleted Document Remains Visible in Workspace

## Summary

A document remains visible in the workspace after permanent deletion.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open the document list.
2. Move a document to Trash.
3. Open Trash.
4. Permanently delete the document.
5. Return to the workspace.

## Actual Result

The deleted document is still visible.

## Expected Result

The document should disappear from all active views after permanent deletion.

## User or Business Impact

Users cannot trust deletion behavior or document state.

## Attachment

Evidence available in the original defect management system.
