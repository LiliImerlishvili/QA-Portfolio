# TC-RE-010 - Analytics Event Triggered on Inquiry Submit

**Priority:** Medium

## Preconditions
- GA4/GTM is enabled in test environment
- Inquiry form submission is possible
- QA can observe events (GA4 DebugView or equivalent)

## Steps
1. Submit inquiry form with valid data
2. Observe analytics events in the tracking tool

## Expected Result
- Inquiry submission triggers expected event once
- No duplicate events are fired on refresh or double click
- Event data is consistent (page/context)
