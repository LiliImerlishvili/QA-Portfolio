# BR — Unsaved Changes Warning Appears After Notification Settings Are Saved

## Summary

After saving notification settings, the application still displays an unsaved-changes warning.

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

Normal

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Profile.
2. Open Settings.
3. Open Notifications.
4. Change a setting.
5. Tap Save.
6. Navigate back.

## Actual Result

The application displays a Discard changes warning.

## Expected Result

Saved settings should not trigger an unsaved-changes warning.

## User Impact

Users may believe their changes were not saved.

## Attachment

Evidence available in the original defect management system.
