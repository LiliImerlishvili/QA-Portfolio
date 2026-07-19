# BR-002 — Invalid Phone Number Format Is Accepted and OTP Is Sent

## Summary

A phone number containing invalid brackets is accepted and OTP is sent.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

High

## Priority

Normal

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Open registration.
2. Enter a number in an invalid format, for example +995(599)123456.
3. Click Send Code.

## Actual Result

OTP is sent despite the invalid format.

## Expected Result

The number should be rejected or normalized before OTP is sent.

## User or Business Impact

Frontend and backend validation are inconsistent.

## Attachment

Evidence available in the original defect management system.
