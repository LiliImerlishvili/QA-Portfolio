# BR-002 — Current Round Freezes After Switching Between Mobile and Web

## Summary

After participants switch the live debate between mobile and web using Device Switch, the current round freezes and the next round does not start after the countdown ends.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.7 |
| Application Version | 1.21.0 (1.0.487) |
| Secondary Platform | Web |

## Severity

Critical

## Priority

High

## Preconditions

- Users are logged in.
- Users are in a live debate in Face-to-Face format.
- The Yes-side participant's round is in progress.

## Steps to Reproduce

1. From the mobile device, switch to the web version.
2. Tap the **Device Switch** button.
3. From the web version, switch back to the mobile device.
4. Tap the **Device Switch** button.
5. As the moderator, tap the **Next Round** button.

## Actual Result

After switching devices for all three participants, the current round freezes and the live debate can no longer continue normally. The **Next Round** button is visible; after the moderator taps it, the countdown starts, but no new round begins once the countdown ends.

## Expected Result

After a device switch, the live debate should continue normally and the next round should start successfully after the countdown.

## User Impact

Participants and the moderator are stuck in a frozen round and cannot complete the debate.

## Business Impact

A blocked live debate breaks the core product flow and directly affects user retention and live content quality.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
