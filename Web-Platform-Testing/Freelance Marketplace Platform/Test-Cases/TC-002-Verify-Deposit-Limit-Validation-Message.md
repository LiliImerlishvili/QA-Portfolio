# TC-002 — Verify Deposit Limit Validation Message

## Related Defect

- BR-002 — Deposit Limit Validation Message Is Unclear

## Objective

Verify that deposit limits are enforced and clearly communicated.

## Preconditions

- The user is authenticated.
- The deposit screen is available.

## Test Steps

1. Open the deposit screen.
2. Enter an amount below the minimum.
3. Submit the request.
4. Enter an amount above the maximum.
5. Submit the request.
6. Enter a valid amount within the range.
7. Submit the request.

## Expected Result

- Invalid amounts are rejected.
- The minimum and maximum allowed amounts are clearly displayed.
- The correct currency is shown.
- A valid amount can proceed to the next step.

## Priority

High

## Test Type

Negative / Functional / Validation

## Status

Not Executed
