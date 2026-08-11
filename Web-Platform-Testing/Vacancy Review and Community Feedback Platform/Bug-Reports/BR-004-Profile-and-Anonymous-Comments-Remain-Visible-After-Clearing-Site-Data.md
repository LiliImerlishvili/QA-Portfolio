# BR-004 — Profile and Anonymous Comments Remain Visible After Clearing Site Data

## Summary

After clearing site data, the previous profile state and anonymous comments remain visible.

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

1. Log in and create or view anonymous content.
2. Clear site data.
3. Return to the application.
4. Open the profile and related comments.

## Actual Result

Previous profile state and anonymous content remain visible.

## Expected Result

The application should clear local session state and require a new login.

## User or Business Impact

Stale or sensitive user data may remain exposed.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
