# BR-004 — Battery Percentage Continues to Decrease While the Device Is Charging During an Active Debate

## Summary

During an active live debate, the application drains the battery very quickly; even when the device is connected to a charger, the battery percentage keeps decreasing instead of increasing.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.6 |
| Application Version | 1.13 |

## Severity

High

## Priority

High

## Preconditions

- The user is registered and logged in.
- A debate is in progress in Host Rules format in a private debate room.
- The Moderator, Yes Team and No Team participate in the debate.
- The device battery level is below 20%.

## Steps to Reproduce

1. Connect the phone to a charger.
2. Observe the battery percentage during the active debate.

## Actual Result

During the live debate, the device battery drains very quickly. When the battery level is below 20% and the device is connected to a charger, the battery percentage continues to decrease instead of increasing. By the end of the live debate, the battery level drops to approximately 1%, even though the device is connected to the charger.

## Expected Result

The application should not consume such a high amount of battery during a live debate. When the device is connected to a charger, the battery percentage should not continue to drop rapidly, and the application's energy consumption under normal usage conditions should not exceed the energy supplied by the charger.

## User Impact

Participants risk their device shutting down mid-debate, even while charging, and the device may overheat.

## Business Impact

Excessive energy consumption makes long live debates impractical and leads to negative reviews and abandoned sessions.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
