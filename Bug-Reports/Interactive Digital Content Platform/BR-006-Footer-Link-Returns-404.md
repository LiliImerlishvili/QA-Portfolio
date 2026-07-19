# BR-006 — Footer Link Opens a 404 Page

## Summary

A footer navigation link opens a missing page and returns a 404 error.

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
2. Scroll to the footer.
3. Select the affected footer link.
4. Observe the destination page.

## Actual Result

The user is redirected to a 404 or template-not-found page.

## Expected Result

The link should open the correct destination page without errors.

## User or Business Impact

Users encounter broken navigation and cannot access expected content.

## Attachment

Evidence is available in the original defect management system. Sensitive URLs and account data are intentionally omitted.
