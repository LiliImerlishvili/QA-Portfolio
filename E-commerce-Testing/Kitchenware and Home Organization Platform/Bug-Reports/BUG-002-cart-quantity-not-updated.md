# 🐞 Cart quantity does not update after increasing item count

**Bug ID:** KHP-BUG-002  
**Priority:** Medium  

## Description
Increasing the quantity of a product in the cart does not update the total quantity immediately.

## Preconditions
- Product is already added to the cart
- User is on the cart page

## Steps to Reproduce
1. Open the cart page
2. Increase product quantity using the plus button
3. Observe cart total

## Actual Result
Cart quantity remains unchanged until the page is refreshed.

## Expected Result
Cart quantity updates instantly after changing item count.
