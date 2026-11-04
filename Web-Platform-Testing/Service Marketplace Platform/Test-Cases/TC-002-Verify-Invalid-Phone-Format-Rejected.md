# TC-002 — Verify Invalid Phone Format Rejected

## Related Defect

- BR-002

## Objective

Verify invalid phone formats are rejected or normalized before OTP.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user is not registered.

## Test Steps

1. Open registration.
2. Enter a number in an invalid format, for example +995(599)123456.
3. Click Send Code.

## Expected Result

The number should be rejected or normalized before OTP is sent.

## Status

Not Executed
