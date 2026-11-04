# TC-009 — Verify Google Sign-In After Cancel and Retry

## Related Defect

- None (additional coverage)

## Objective

Verify that cancelling the Google popup does not break a later attempt.

## Test Type

Edge case

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- The user is not logged in.

## Test Steps

1. Click **Continue with Google**.
2. Close the Google popup.
3. Click **Continue with Google** again and complete sign-in.

## Expected Result

- The user returns to the login screen after cancel.
- The second attempt signs the user in.

## Status

Not Executed
