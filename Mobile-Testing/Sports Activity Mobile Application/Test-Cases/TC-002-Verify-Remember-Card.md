# TC-002 — Verify Remember Card

## Related Defect

- BR-002

## Objective

Verify Remember Card saves the new payment method.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Add a product to the cart.
2. Proceed to checkout.
3. Choose a new card.
4. Enable Remember Card.
5. Complete payment.
6. Open Profile > Payment Methods.

## Expected Result

The new card should be saved and displayed immediately after successful payment.

## Status

Not Executed
