# TC-004 — Verify Next Round Starts After Countdown Following Device Switch

## Related Defect

- BR-002

## Objective

Verify that the moderator can start the next round after a device switch has occurred.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.7 |
| Application Version | 1.22 |
| Secondary Platform | Web (desktop browser) |

## Preconditions

- A live debate is in progress.
- At least one participant has completed a mobile ↔ web device switch.

## Test Steps

1. As the moderator, tap **Next Round**.
2. Wait until the countdown ends.

## Expected Result

- The countdown starts after tapping **Next Round**.
- The next round starts automatically when the countdown ends.
- All participants see the same round state.

## Status

Not Executed
