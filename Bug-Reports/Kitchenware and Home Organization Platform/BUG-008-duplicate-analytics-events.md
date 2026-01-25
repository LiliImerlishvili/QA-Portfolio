# 🐞 Duplicate analytics events fired during checkout steps

**Bug ID:** KHP-BUG-008  
**Priority:** Medium  

## Description
Checkout step analytics events are triggered multiple times.

## Preconditions
- User navigates through checkout steps

## Steps to Reproduce
1. Proceed to checkout
2. Navigate forward and backward between steps
3. Monitor analytics events

## Actual Result
Same event is fired multiple times.

## Expected Result
Only one event should be triggered per step.
