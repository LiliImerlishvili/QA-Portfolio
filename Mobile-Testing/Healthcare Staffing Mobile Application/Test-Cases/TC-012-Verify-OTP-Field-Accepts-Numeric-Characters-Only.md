# TC-012 — Verify OTP Field Accepts Numeric Characters Only

## Related Defect

- BR-007

## Objective

Verify that the OTP field accepts only digits and the OTP code length.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- An OTP code has been sent to the user's email.

## Test Steps

1. Focus the OTP field.
2. Try to type letters, spaces and special characters.
3. Paste a value containing letters and digits.
4. Try to enter more digits than the OTP length.

## Expected Result

- The numeric keyboard opens automatically.
- Letters, spaces and special characters are not accepted.
- Pasted values are rejected or sanitized to digits only.
- Input length is limited to the OTP length.

## Status

Not Executed
