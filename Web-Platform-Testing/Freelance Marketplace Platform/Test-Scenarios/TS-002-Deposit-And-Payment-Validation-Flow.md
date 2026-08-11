# TS-002 — Deposit and Payment Validation Flow

## Objective

Verify deposit limits, balance usage, and payment routing behavior.

## Scenario

1. Open balance management.
2. Enter an amount below the minimum.
3. Enter an amount above the maximum.
4. Enter a valid amount.
5. Continue with payment.
6. Verify whether internal balance or external payment is used correctly.

## Expected Result

- Invalid amounts are rejected with clear messages.
- Valid limits are displayed.
- Available internal balance is used according to requirements.
- External payment is opened only when necessary.

## Related Artifacts

- BR-002
- TC-002
- CL-001

## Priority

High

## Status

Not Executed
