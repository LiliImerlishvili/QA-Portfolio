# BR-001 — Selected Language Changes Automatically After Navigation

## Summary

After the user selects a language and navigates to another page, the interface automatically switches to a different language.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The relevant feature is available.
- The user has the required access level.

## Steps to Reproduce

1. Open the platform.
2. Select a non-default language.
3. Navigate to another main page.
4. Observe the interface language.

## Actual Result

The language changes automatically and does not preserve the user's selection.

## Expected Result

The selected language should persist across navigation and page reloads.

## User or Business Impact

Users lose language consistency and may be unable to understand the interface.

## Attachment

Evidence is available in the original defect management system. Sensitive URLs and account data are intentionally omitted.
