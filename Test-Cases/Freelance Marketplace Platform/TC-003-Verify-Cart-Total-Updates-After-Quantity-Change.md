# TC-003 — Verify Cart Total Updates After Quantity Change

## Related Defect

- BR-003 — Cart Total Does Not Update After Quantity Change

## Objective

Verify that quantity, subtotal, and total values remain synchronized after cart updates.

## Preconditions

- The user is authenticated.
- An item can be added to the cart.

## Test Steps

1. Add an item to the cart.
2. Open the cart.
3. Change the item quantity.
4. Verify the line total.
5. Verify the cart subtotal and total.
6. Navigate away and reopen the cart.
7. Verify the values again.

## Expected Result

- Quantity updates immediately.
- Line total, subtotal, and total are recalculated correctly.
- Cart badge and cart content remain synchronized.
- Values persist after navigation or refresh.

## Priority

High

## Test Type

Functional / Calculation / Regression

## Status

Not Executed
