# BR-002 — Remember Card Does Not Save the New Payment Method

## Summary

Selecting Remember Card during checkout does not save the newly used card under Payment Methods.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Add a product to the cart.
2. Proceed to checkout.
3. Choose a new card.
4. Enable Remember Card.
5. Complete payment.
6. Open Profile > Payment Methods.

## Actual Result

The new card is not displayed in Payment Methods.

## Expected Result

The new card should be saved and displayed immediately after successful payment.

## User Impact

Users must re-enter payment details for future purchases.

## Attachment

Evidence available in the original defect management system.
