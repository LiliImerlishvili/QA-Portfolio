# TS-006 - Out-of-Stock and Low-Stock Handling

## Goal
Verify that system enforces stock rules and displays correct messaging for out-of-stock and low-stock products.

## Preconditions
- Catalog contains an out-of-stock product and/or low-stock product (or test data is available).
- Add to Cart logic is enabled.

## Flow (High-level)
1. User opens an out-of-stock product page.
2. User attempts to add product to cart.
3. User opens a low-stock product page.
4. User adds product to cart and attempts to increase quantity beyond available stock.
5. User verifies the system prevents invalid actions and displays clear stock messaging.
