# BR-004 — Pickup Checkout Cannot Be Completed After Slide to Confirm

## Summary

The checkout flow does not continue after swiping Slide to Confirm with Pickup selected.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open the cart.
2. Proceed to checkout.
3. Select Pickup.
4. Choose a payment method.
5. Swipe Slide to Confirm.

## Actual Result

The purchase flow stops and does not continue.

## Expected Result

The user should continue to payment and complete the purchase successfully.

## User Impact

Users cannot complete pickup purchases.

## Attachment

Evidence available in the original defect management system.
