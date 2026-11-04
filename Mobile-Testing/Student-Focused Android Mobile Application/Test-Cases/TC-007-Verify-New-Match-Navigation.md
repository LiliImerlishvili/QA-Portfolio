# TC-007 — Verify New Match Navigation

## Related Defect

- BR-007

## Objective

Verify that a New Match notification opens the current matched profile.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Receive a New Match notification.
2. Open Notifications.
3. Tap the matched user's profile photo.

## Expected Result

The current matched user's profile should open.

## Status

Not Executed
