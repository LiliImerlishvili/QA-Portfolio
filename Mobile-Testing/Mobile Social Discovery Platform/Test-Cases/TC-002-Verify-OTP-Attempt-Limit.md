# TC-002 — Verify OTP Attempt Limit and Temporary Lock

## Related Defect

- BR-002

## Objective

Verify that repeated invalid OTP attempts trigger a temporary lock or code invalidation.

## Test Type

Security

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user has started registration and requested a verification code.

## Test Steps

1. Enter an invalid OTP and submit.
2. Repeat until the configured failed-attempt limit is reached.
3. Enter the correct OTP.
4. Wait for the lock period to end and request a new code.

## Expected Result

- After the limit is reached, a temporary lock or cooldown is applied with a clear message.
- The correct OTP is not accepted during the lock.
- After the lock ends, a new code can be requested and the previous code is invalid.

## Status

Not Executed
