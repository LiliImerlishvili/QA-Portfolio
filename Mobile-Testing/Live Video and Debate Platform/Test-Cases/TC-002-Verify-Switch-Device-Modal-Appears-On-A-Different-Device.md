# TC-002 — Verify Switch Device Modal Appears When Joining From a Different Device

## Related Defect

- None (additional coverage)

## Objective

Verify that the device-switch confirmation is shown only when the same account joins an ongoing live debate from a different device.

## Test Type

Positive

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
| Secondary Platform | Web (desktop browser) |

## Preconditions

- A live debate is in progress.
- The participant is in the debate on the mobile device.

## Test Steps

1. Log in with the same account on the web version.
2. Open the same ongoing live debate on the web version.

## Expected Result

- The "Switch Device" confirmation modal is displayed on the web version.
- After confirmation, the session moves to the web version and ends on the mobile device.

## Status

Not Executed
