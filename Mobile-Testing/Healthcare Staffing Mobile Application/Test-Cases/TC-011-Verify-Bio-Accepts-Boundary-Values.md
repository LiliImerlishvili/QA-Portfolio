# TC-011 — Verify Bio Field Accepts Boundary Values (999 / 1000 Characters)

## Related Defect

- None (additional coverage)

## Objective

Verify boundary value behavior of the Bio field.

## Test Type

Boundary

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

## Test Steps

1. Enter `999` characters in Bio and tap **Confirm**.
2. Enter exactly `1000` characters in Bio and tap **Confirm**.

## Expected Result

- Both values are accepted.
- The profile is saved successfully.

## Status

Not Executed
