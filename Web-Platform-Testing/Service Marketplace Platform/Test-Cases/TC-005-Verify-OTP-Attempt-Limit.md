# TC-005 — Verify OTP Attempt Limit

## Related Defect

- BR-005

## Objective

Verify OTP is invalidated or locked after the configured failed attempts.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user has a registered account.

## Test Steps

1. Open Forgot Password.
2. Request an OTP.
3. Enter an incorrect OTP three times.
4. Enter the correct OTP.

## Expected Result

After the configured failed-attempt limit, the OTP should be invalidated or the user should be temporarily locked and required to request a new code.

## Status

Not Executed
