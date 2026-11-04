# TC-009 — Verify No Warning After Save

## Related Defect

- BR-009

## Objective

Verify saved notification settings do not trigger an unsaved warning.

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

1. Open Profile.
2. Open Settings.
3. Open Notifications.
4. Change a setting.
5. Tap Save.
6. Navigate back.

## Expected Result

Saved settings should not trigger an unsaved-changes warning.

## Status

Not Executed
