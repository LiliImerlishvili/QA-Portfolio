# TC-003 — Verify Open Portal Opens the Authorization Page for the Current Environment

## Related Defect

- BR-002

## Objective

Verify that the portal authorizes against the same environment it was opened from.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- The user is not logged in.

## Test Steps

1. Open the Test environment.
2. Click **Open Portal**.
3. Log in.

## Expected Result

- The authorization page opens without an error.
- After login, the user is redirected back to the Test environment, not to Staging/Production.

## Status

Not Executed
