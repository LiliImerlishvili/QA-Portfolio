# TC-014 — Verify Resend Code Issues a New OTP and Invalidates the Previous One

## Related Defect

- BR-008

## Objective

Verify the recovery flow after the lockout period ends.

## Test Type

Security

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

- The OTP lockout period has expired.

## Test Steps

1. Tap **Resend Code**.
2. Enter the previous OTP.
3. Enter the new OTP.

## Expected Result

- **Resend Code** is enabled after the lockout.
- The previous OTP is rejected.
- The new OTP verifies the account.
- The failed-attempt counter is reset.

## Status

Not Executed
