# BR-005 — Social Login Does Not Complete Successfully

## Summary

The external social authentication flow returns an error and does not complete login.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Open the login page.
2. Select social login.
3. Complete the external authentication flow.

## Actual Result

The user receives a technical error and remains unauthenticated.

## Expected Result

Authentication should complete successfully or show a clear user-friendly error.

## User or Business Impact

Users cannot access the platform through a supported login method.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
