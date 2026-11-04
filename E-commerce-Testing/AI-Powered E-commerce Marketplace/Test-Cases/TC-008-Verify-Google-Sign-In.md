# TC-008 — Verify Sign-In With Google

## Related Defect

- BR-003

## Objective

Verify successful Google authentication.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- The user is not logged in.
- The user has an active Google account.

## Test Steps

1. Open the website.
2. Click the profile icon.
3. Click **Continue with Google** and choose an account.

## Expected Result

- No backend error is displayed.
- The user is signed in and sees their personal account.

## Status

Not Executed
