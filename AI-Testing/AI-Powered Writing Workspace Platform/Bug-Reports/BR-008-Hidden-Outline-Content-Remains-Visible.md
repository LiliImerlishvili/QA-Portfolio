# BR-008 — Hidden Outline Content Remains Visible in the Draft Editor

## Summary

Using Hide on an outline item changes its navigation state, but the related content remains visible in the editor.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open a general draft with outline items.
2. Select an outline item.
3. Use the Hide action.
4. Close or collapse the navigation panel.
5. Review the draft editor.

## Actual Result

The outline item appears hidden in navigation, but its content remains visible in the draft.

## Expected Result

The hidden item and its related content should be removed from the visible editor state.

## User or Business Impact

Content visibility controls are unreliable and can expose content the user intended to hide.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
