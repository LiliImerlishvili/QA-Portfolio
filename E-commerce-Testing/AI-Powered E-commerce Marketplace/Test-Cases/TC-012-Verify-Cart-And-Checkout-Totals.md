# TC-012 — Verify Cart and Checkout Totals for Discounted Products

## Related Defect

- None (additional coverage)

## Objective

Verify pricing consistency from product page to checkout.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- An active discount exists on a product.

## Test Steps

1. Add the product to the cart.
2. Open the cart.
3. Proceed to checkout.

## Expected Result

- Product page, cart and checkout show the same discounted price.
- Totals are calculated correctly.

## Status

Not Executed
