# TC-006 — Verify Facebook Login With Invalid Password Shows Validation

## Related Defect

- None (additional coverage)

## Objective

Verify that an incorrect Facebook password is handled with a clear validation message.

## Test Type

Negative

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.6.1 |
| Application Version | 1.17 |

## Preconditions

- The user has an active Facebook account.

## Test Steps

1. Open the application.
2. Tap **Continue with Facebook**.
3. Enter an incorrect password.
4. Try to continue.

## Expected Result

- An "Incorrect password" validation message is displayed.
- The user remains on the login step and can retry.

## Status

Not Executed
