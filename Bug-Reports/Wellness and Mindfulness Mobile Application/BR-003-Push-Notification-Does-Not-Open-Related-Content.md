# BR-003 — Push Notification Does Not Open the Related Content

## Summary

Tapping a received push notification opens the application but does not navigate to the related screen or content.

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

Normal

## Preconditions

- The user is logged in.
- A push notification has been received.

## Steps to Reproduce

1. Close or background the application.
2. Receive a push notification.
3. Tap the notification.
4. Observe the opened screen.

## Actual Result

The application opens, but the corresponding content or feature is not displayed.

## Expected Result

The application should deep-link directly to the content associated with the notification.

## User Impact

Users cannot understand or access the event referenced by the notification.

## Attachment

Evidence available in the original defect management system.
