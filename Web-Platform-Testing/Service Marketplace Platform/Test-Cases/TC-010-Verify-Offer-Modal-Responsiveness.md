# TC-010 — Verify Offer Modal Responsiveness

## Related Defect

- BR-010

## Objective

Verify modal controls remain visible after entering a price.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open a service request.
2. Click Send Offer.
3. Enter a price.
4. Observe the modal controls.

## Expected Result

Both controls should remain fully visible at supported viewport sizes and zoom levels.

## Status

Not Executed
