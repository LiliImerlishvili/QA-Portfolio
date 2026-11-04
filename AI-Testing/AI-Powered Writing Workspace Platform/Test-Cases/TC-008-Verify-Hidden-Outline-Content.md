# TC-008 — Verify Hidden Outline Content

## Related Defect

- BR-008

## Objective

Verify that hidden outline items and related content are not visible in the editor.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Test Steps

1. Open a general draft with outline items.
2. Select an outline item.
3. Use the Hide action.
4. Close or collapse the navigation panel.
5. Review the draft editor.

## Expected Result

The hidden item and its related content should be removed from the visible editor state.

## Status

Not Executed
