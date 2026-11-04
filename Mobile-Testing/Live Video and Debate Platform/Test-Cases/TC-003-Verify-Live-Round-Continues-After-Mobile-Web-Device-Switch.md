# TC-003 — Verify Live Round Continues After Mobile ↔ Web Device Switch

## Related Defect

- BR-002

## Objective

Verify that the current round continues without freezing after participants switch between mobile and web.

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

- Users are logged in.
- Users are in a live debate in Face-to-Face format.
- The Yes-side participant's round is in progress.

## Test Steps

1. From the mobile device, switch to the web version and tap **Device Switch**.
2. From the web version, switch back to the mobile device and tap **Device Switch**.
3. Repeat the switch for all participants.
4. Observe the current round timer and video/audio streams.

## Expected Result

- The current round continues without freezing.
- The round timer keeps counting.
- Video and audio streams are restored for all participants.

## Status

Not Executed
