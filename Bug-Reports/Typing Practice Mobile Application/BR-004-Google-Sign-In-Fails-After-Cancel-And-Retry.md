# BR — Google Sign-In Shows Login Failed After Cancelling and Retrying

## Summary

After cancelling Google Sign-In and immediately retrying, the application displays a Login Failed error.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- Google Sign-In is available.
- The user is logged out.

## Steps to Reproduce

1. Open the application.
2. Tap Continue with Google.
3. Cancel the Google authentication flow.
4. Tap Continue with Google again.

## Actual Result

The application displays: Login Failed: Could not Sign in with Google.

## Expected Result

Cancelling should return the user to the login screen without an error. A later retry should start a fresh Google Sign-In flow.

## User Impact

Users may be unable to authenticate with Google after a normal cancellation.

## Attachment

Evidence available in the original defect management system.
