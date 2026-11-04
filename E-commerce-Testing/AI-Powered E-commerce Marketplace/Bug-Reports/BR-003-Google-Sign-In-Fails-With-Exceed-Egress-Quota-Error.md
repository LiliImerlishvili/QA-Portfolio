# BR-003 — exceed_egress_quota Error Appears During Google Sign-In

## Summary

Signing in with Google returns a backend service-restriction error instead of logging the user in.

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153.0.8010.53 (Official Build, arm64) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Status

In Dev Review

## Preconditions

- The user is not logged in.
- The user has an active Google account.

## Steps to Reproduce

1. Open the marketplace website.
2. Click the profile icon.
3. Click the **Continue with Google** button.

## Actual Result

Instead of Google sign-in, the user sees the following error message:

```json
{
  "message": "Service for this project is restricted due to the following violations: exceed_egress_quota. The project owner must upgrade their plan or remove spend caps to restore service."
}
```

The user cannot sign in and cannot access their personal account.

## Expected Result

After clicking the Google sign-in button, the user should sign in successfully and access their personal account.

## User Impact

Existing users who rely on Google sign-in are locked out of their accounts.

## Business Impact

Both sellers and customers lose access, directly blocking store management, orders and sales.

## Attachment

Session recording with console logs and network requests (BetterBugs) is available in the original defect management system.
