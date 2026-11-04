# TC-010 — Verify Bio Character Limit Validation Message

## Related Defect

- BR-006

## Objective

Verify that exceeding the Bio limit shows a specific validation message.

## Test Type

Negative

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on the Complete Your Profile page.
- All required fields except Bio are filled with valid data.

## Test Steps

1. Enter `1001` characters in the Bio field.
2. Tap **Confirm**.

## Expected Result

- The message "Bio must not exceed 1000 characters." (or equivalent) is displayed.
- The profile is not saved.

## Status

Not Executed
