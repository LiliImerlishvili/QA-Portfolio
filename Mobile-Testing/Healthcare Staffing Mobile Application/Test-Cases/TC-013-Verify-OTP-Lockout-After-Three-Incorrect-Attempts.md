# TC-013 — Verify OTP Lockout After Three Incorrect Attempts

## Related Defect

- BR-008

## Objective

Verify that OTP verification is temporarily locked after 3 consecutive incorrect attempts.

## Test Type

Security

## Priority

Critical

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

1. Enter an incorrect OTP 3 times.
2. Enter the correct OTP during the lockout period.

## Expected Result

- After the third attempt, a message about the maximum number of attempts is displayed.
- OTP submission is disabled during the lockout period.
- The correct OTP is not accepted during the lockout.

## Status

Not Executed
