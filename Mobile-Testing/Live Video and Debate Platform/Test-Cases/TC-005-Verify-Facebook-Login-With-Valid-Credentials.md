# TC-005 — Verify Facebook Registration/Login With Valid Credentials

## Related Defect

- BR-003

## Objective

Verify that a user can register or log in with Facebook using the correct password.

## Test Type

Positive

## Priority

Critical

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
- The user is not logged in to the application.

## Test Steps

1. Open the application.
2. Tap **Continue with Facebook**.
3. Tap **Continue**.
4. Enter the correct Facebook account password.
5. Complete the authorization flow.

## Expected Result

- No validation error is displayed.
- Registration/login completes successfully.
- The user is redirected to the home feed.

## Status

Not Executed
