# TC-002 — Verify OTP Attempt Limit

## Related Defect

- BR-002

## Objective

Verify OTP verification is blocked or reset after the configured failed attempts.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user has a registered account.

## Test Steps

1. Request an OTP.
2. Enter an incorrect OTP three times.
3. Enter the correct OTP.
4. Submit.

## Expected Result

After the configured failed-attempt limit, the OTP should be invalidated, the user temporarily locked, or a new OTP required.

## Status

Not Executed
