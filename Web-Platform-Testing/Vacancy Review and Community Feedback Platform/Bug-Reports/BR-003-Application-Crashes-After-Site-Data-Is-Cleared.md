# BR-003 — Application Crashes After Site Data Is Cleared

## Summary

After clearing browser site data, opening the profile page causes a client-side application error.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Log in.
2. Clear site data from browser storage.
3. Return to the application.
4. Open the profile page.

## Actual Result

The application crashes with a client-side exception.

## Expected Result

The application should restore a valid unauthenticated state and redirect the user to Login.

## User or Business Impact

Users encounter a blocking crash after a common browser action.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
