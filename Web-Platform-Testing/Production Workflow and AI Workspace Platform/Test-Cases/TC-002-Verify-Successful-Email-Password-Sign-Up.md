# TC-002 — Verify Successful Sign-Up With a New Email and Password

## Related Defect

- None (additional coverage)

## Objective

Verify the positive registration path.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- The email has never been used in the system.

## Test Steps

1. Click **Open Portal** → **Sign Up**.
2. Enter a new email and a valid password.
3. Click **Continue**.
4. Check the inbox.

## Expected Result

- Registration completes and the user is signed in.
- Exactly one Welcome/verification email is received.

## Status

Not Executed
