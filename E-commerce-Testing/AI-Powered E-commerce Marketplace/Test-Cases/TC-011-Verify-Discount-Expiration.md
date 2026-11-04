# TC-011 — Verify Discount Is Not Applied After Its Expiration Date

## Related Defect

- None (additional coverage)

## Objective

Verify discount expiration rules.

## Test Type

Negative

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

- A product has a discount with an expiration date in the past.

## Test Steps

1. Open the product on the storefront.
2. Add it to the cart.

## Expected Result

- The discounted price is not displayed.
- The cart uses the regular price.

## Status

Not Executed
