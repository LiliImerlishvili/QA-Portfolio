# BR — Notification Toggle Remains Visually Pressed After Switching

## Summary

A notification toggle keeps a pressed visual state after switching.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Settings.
2. Open Notification Management.
3. Toggle Enable Push Notifications.
4. Observe the control state.

## Actual Result

The toggle remains visually pressed or stuck.

## Expected Result

The toggle should immediately display the correct final state.

## User Impact

Users cannot confidently determine whether the setting is enabled.

## Attachment

Evidence available in the original defect management system.
