# 🧩 Verify analytics events fire once per checkout step

**Test Case ID:** TC-KHP-008  
**Linked Bug ID:** KHP-BUG-008  
**Priority:** Medium  

## Objective
Ensure analytics events are not duplicated during checkout.

## Preconditions
- User proceeds through checkout steps

## Test Steps
1. Navigate to checkout
2. Move forward and backward between steps
3. Monitor analytics events

## Expected Result
Only one analytics event is fired per checkout step.
