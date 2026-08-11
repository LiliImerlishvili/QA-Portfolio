# BR-002 — User Is Not Temporarily Locked After Multiple Invalid OTP Attempts

## Summary

The application does not temporarily block OTP verification after repeated invalid attempts.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user has access to the relevant flow.
- The required feature is available.

## Steps to Reproduce

1. Request a verification code.
2. Enter an invalid OTP multiple times.
3. Continue submitting invalid codes.
4. Observe the account and verification state.

## Actual Result

The user can continue attempting OTP verification without a temporary lock or cooldown.

## Expected Result

After the configured failed-attempt limit, the system should apply a temporary lock, invalidate the code, or require a new OTP.

## User or Business Impact

The verification flow is exposed to brute-force attempts.

## Attachment

Evidence is available in the original defect management system. Sensitive links, user data, media, internal identifiers, and employee details are intentionally omitted.
