# TC-007 — Verify Battery Charges During an Active Live Debate

## Related Defect

- BR-004

## Objective

Verify that application energy consumption during a live debate does not exceed the energy supplied by a charger.

## Test Type

Non-functional

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.6 |
| Application Version | 1.13 |

## Preconditions

- A debate is in progress in Host Rules format.
- The Moderator, Yes Team and No Team participate.
- The device battery level is below 20%.

## Test Steps

1. Connect the device to a charger.
2. Stay in the active debate for at least 15 minutes.
3. Record the battery percentage every 5 minutes.

## Expected Result

- The battery percentage does not decrease while the device is charging.
- The device does not overheat.

## Status

Not Executed
