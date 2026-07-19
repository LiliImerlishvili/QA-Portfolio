# BR — New Match Notification Opens an Old Chat Instead of the Current Profile

## Summary

Tapping a New Match notification opens an old chat rather than the current matched user's profile.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Receive a New Match notification.
2. Open Notifications.
3. Tap the matched user's profile photo.

## Actual Result

The application opens an old chat thread.

## Expected Result

The current matched user's profile should open.

## User Impact

Users are directed to incorrect content.

## Attachment

Evidence available in the original defect management system.
