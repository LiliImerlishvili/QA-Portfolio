# TC-012 — Verify Live Rejoin After Network Interruption

## Related Defect

- None (additional coverage)

## Objective

Verify that a participant automatically reconnects to the live debate after a short network loss.

## Test Type

Edge case

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.7 |
| Application Version | 1.22 |

## Preconditions

- A live debate is in progress.
- The participant is in the debate on the mobile device.

## Test Steps

1. Turn on Airplane Mode for 10 seconds.
2. Turn off Airplane Mode.
3. Observe the live debate.

## Expected Result

- A reconnecting indicator is displayed during the outage.
- The participant reconnects automatically to the same debate.
- No "Switch Device" modal is displayed.
- The round state matches the other participants.

## Status

Not Executed
