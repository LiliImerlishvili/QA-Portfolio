# BR-002 — OTP Verification Remains Available After Three Failed Attempts

## Summary

The system does not limit OTP verification attempts and still accepts the correct OTP after three failures.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Request an OTP.
2. Enter an incorrect OTP three times.
3. Enter the correct OTP.
4. Submit.

## Actual Result

The correct OTP is accepted and the process continues.

## Expected Result

After the configured failed-attempt limit, the OTP should be invalidated, the user temporarily locked, or a new OTP required.

## User or Business Impact

The flow is vulnerable to brute-force attempts.

## Attachment

Evidence available in the original defect management system.
