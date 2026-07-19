# BR — Privacy Settings Displays Duplicate Success Popups

## Summary

Saving Privacy Settings displays two success popups one after another.

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
3. Open Privacy.
4. Change a setting.
5. Tap Save.

## Actual Result

Two success messages are displayed.

## Expected Result

Only one confirmation message should be shown.

## User Impact

Duplicate feedback creates a confusing and unpolished experience.

## Attachment

Evidence available in the original defect management system.
