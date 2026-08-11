# BR-005 — Downward Swipe Unexpectedly Logs the User Out

## Summary

A downward swipe gesture from the top area can unexpectedly terminate the user session and log the user out.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is registered and logged in.
- The application is open on an authenticated screen.

## Steps to Reproduce

1. Open the application.
2. Navigate to an authenticated screen.
3. Swipe downward from the top edge.
4. Repeat the gesture if needed.

## Actual Result

The application logs the user out unexpectedly.

## Expected Result

The gesture should not change the authentication state unless the user explicitly selects Logout.

## User Impact

Users may lose progress and be forced to authenticate again.

## Attachment

Evidence available in the original defect management system.
