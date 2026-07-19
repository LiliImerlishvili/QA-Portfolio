# BR-003 — Cart Total Does Not Update After Quantity Change

## Summary

The cart total remains unchanged after the user changes the quantity of an item.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| OS | Windows 11 |
| Browser | Google Chrome |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- At least one service or item can be added to the cart.

## Steps to Reproduce

1. Open the platform.
2. Navigate to a service or product details page.
3. Add the item to the cart.
4. Open the cart.
5. Change the quantity, for example from 1 to 4.
6. Return to the home page.
7. Open the cart from the header.
8. Review the quantity and total price.

## Actual Result

The displayed item quantity or total remains incorrect and does not reflect the updated quantity.

## Expected Result

The cart should update immediately after the quantity changes.

The total price, subtotal, and cart badge should remain synchronized across all pages.

## User Impact

Users may see inaccurate totals and may not trust the checkout flow.

## Business Impact

Incorrect cart calculations can cause abandoned purchases, refund requests, and financial discrepancies.

## Attachment

Evidence available in the original defect management system.
