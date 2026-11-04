# TC-001 — Verify Rejoin After Force Close Does Not Show Switch Device Modal

## Related Defect

- BR-001

## Objective

Verify that a participant who force-closes the app and reopens it on the same device returns to the live debate without a device-switch prompt.

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

## Preconditions

- A live debate is in progress in a private debate room in Face-to-Face format.
- Two participants are in the debate with the Yes and No roles.

## Test Steps

1. As the No-side participant, force-close the application.
2. Reopen the application on the same device.
3. Open the same ongoing live debate.

## Expected Result

- The participant returns to the ongoing live debate.
- The "Switch Device" confirmation modal is not displayed.
- The participant's role, camera and microphone state are restored.

## Status

Not Executed
