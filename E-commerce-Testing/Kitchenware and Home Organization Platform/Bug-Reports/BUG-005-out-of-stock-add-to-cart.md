# 🐞 Out-of-stock product can still be added to cart

**Bug ID:** KHP-BUG-005  
**Priority:** High  

## Description
Products marked as out-of-stock can still be added to the cart.

## Preconditions
- Product stock status is "Out of Stock"

## Steps to Reproduce
1. Open out-of-stock product page
2. Click "Add to Cart"

## Actual Result
Product is added to the cart successfully.

## Expected Result
User should see an out-of-stock message and be prevented from adding the item.
