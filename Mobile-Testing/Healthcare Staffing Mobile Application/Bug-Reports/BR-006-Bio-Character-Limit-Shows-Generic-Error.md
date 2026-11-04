# BR-006 — Bio Character Limit Validation Displays a Generic Error Message Instead of a Specific Limit Message

## Type

Bug

## Summary

When the Bio field exceeds the 1000-character limit, the app shows a generic validation error that does not explain the problem.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% |

## Severity

Low

## Priority

Normal

## Preconditions

- The user is registered and logged in.
- The user is on the Complete Your Profile page.
- All required fields except Bio are already filled with valid data.

## Steps to Reproduce

1. Enter `1001` characters in the Bio field.
2. Tap **Confirm**.

## Actual Result

The application displays the generic validation message:

```
Validation failed - please check the provided data
```

The message does not indicate that the Bio field exceeds the allowed 1000-character limit.

## Expected Result

The application should display a clear validation message indicating that the Bio exceeds the allowed character limit, for example:

```
Bio must not exceed 1000 characters.
```

## User Impact

Users do not know which field is invalid or how to fix it.

## Business Impact

Unclear validation increases support requests and profile-completion drop-off.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
