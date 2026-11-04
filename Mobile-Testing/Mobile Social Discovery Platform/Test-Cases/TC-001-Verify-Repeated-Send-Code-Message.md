# TC-001 — Verify Repeated Send Code Message Accuracy

## Related Defect

- BR-001

## Objective

Verify that repeated Send Code actions display an accurate delivery message.

## Test Type

Positive

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user is not registered.
- The user has access to a valid email inbox.

## Test Steps

1. Open the application.
2. Start registration with email verification.
3. Enter a valid email address.
4. Tap **Send Code**.
5. Tap **Send Code** again.

## Expected Result

- The message states that the code was sent to the entered email address.
- The message does not mention an incorrect destination or delivery method.
- A new code is received in the inbox.

## Status

Not Executed
