# TC-005 — Verify Social Login Completes Successfully

## Related Defect

- BR-005

## Objective

Users must be able to log in with a supported social provider.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- The user has an active account with the social login provider.
- The user is not logged in.

## Test Steps

1. Open the login page.
2. Select social login.
3. Complete the external authentication flow.

## Expected Result

- The user is authenticated and redirected to the platform.
- If authentication fails, a clear user-friendly error is shown instead of a technical message.

## Status

Not Executed
