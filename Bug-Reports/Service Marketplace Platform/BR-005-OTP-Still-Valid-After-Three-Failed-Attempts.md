# BR-005 — OTP Remains Valid After Three Failed Attempts

## Summary

During password reset, the user can enter the correct OTP after three failed attempts and continue.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Normal

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Open Forgot Password.
2. Request an OTP.
3. Enter an incorrect OTP three times.
4. Enter the correct OTP.

## Actual Result

The correct OTP is still accepted and the reset flow continues.

## Expected Result

After the configured failed-attempt limit, the OTP should be invalidated or the user should be temporarily locked and required to request a new code.

## User or Business Impact

The password reset flow lacks basic brute-force protection.

## Attachment

Evidence available in the original defect management system.
