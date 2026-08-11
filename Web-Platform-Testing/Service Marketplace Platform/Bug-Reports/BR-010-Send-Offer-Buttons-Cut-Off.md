# BR-010 — Send Offer and Close Buttons Are Cut Off After Entering Price

## Summary

Entering a price causes the Send Offer and Close controls to become partially hidden.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Low

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Open a service request.
2. Click Send Offer.
3. Enter a price.
4. Observe the modal controls.

## Actual Result

The Send Offer and X buttons are clipped or cut off.

## Expected Result

Both controls should remain fully visible at supported viewport sizes and zoom levels.

## User or Business Impact

Users may be unable to submit or close the offer modal.

## Attachment

Evidence available in the original defect management system.
