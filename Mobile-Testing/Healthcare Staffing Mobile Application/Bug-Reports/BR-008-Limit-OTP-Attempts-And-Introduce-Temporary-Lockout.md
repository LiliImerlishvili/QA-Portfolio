# BR-008 — [Improvement] Limit OTP Verification Attempts and Introduce Temporary Lockout

## Type

Improvement

## Summary

Currently, a user can enter an incorrect OTP code more than four times and still successfully verify the account by entering the correct code on the next attempt. To improve account security and prevent repeated OTP guessing attempts, it is recommended to introduce an attempt limitation and temporary lockout mechanism.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Application Version | 2.0.1 (9010) |

## Severity

High

## Priority

High

## Recommended Behavior

- Allow a maximum of 3 consecutive incorrect OTP attempts.
- After the third incorrect attempt, temporarily disable OTP verification for several minutes.
- During the lockout period, the user should not be able to submit additional OTP codes.
- Display a clear message informing the user that the maximum number of attempts has been reached and that they should wait before requesting a new code.
- After the lockout period expires, enable the **Resend Code** button.
- When the user taps **Resend Code**, generate and send a new OTP code to the registered email address.
- The previously issued OTP should become invalid after a new code is generated.
- The failed-attempt counter should reset after a new OTP is successfully issued.

## Expected Benefit

This improvement would reduce the risk of OTP brute-force attempts while providing users with a clear and controlled recovery flow after multiple incorrect entries.
