# BR-001 — "Switch Device" Modal Appears When Rejoining a Live Session on the Same Device

## Summary

After the No-side participant force-closes the application and reopens it on the same device, rejoining the ongoing live debate triggers the "Switch Device" confirmation modal, although no device change has occurred.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.7 |
| Application Version | 1.22 |

## Severity

Medium

## Priority

High

## Preconditions

- A live debate is in progress in a private debate room in Face-to-Face format.
- Two users participate in the live debate with the Yes and No roles.

## Steps to Reproduce

1. The No-side participant force-closes the application (Kill App).
2. The participant reopens the application on the same device.
3. The participant rejoins the same ongoing live debate.

## Actual Result

Upon returning to the live debate, a device-switch confirmation modal with the message "Switch Device" is displayed, even though the user is using the same device.

## Expected Result

The user should be able to return to the ongoing live debate from the same device and continue participating as usual. The device-switch confirmation modal should not be displayed.

## User Impact

The participant is confused by an irrelevant prompt during a time-sensitive live debate and may take an incorrect action that disrupts their participation.

## Business Impact

Incorrect device-session detection reduces trust in the live experience and may lead to accidental session conflicts during debates.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
