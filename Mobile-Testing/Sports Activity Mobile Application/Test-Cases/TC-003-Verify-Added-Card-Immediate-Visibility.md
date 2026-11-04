# TC-003 — Verify Added Card Immediate Visibility

## Related Defect

- BR-003

## Objective

Verify a newly added card appears without restart.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open Payment Methods.
2. Add a new card.
3. Return to the list.
4. Refresh the list.
5. Restart the application.
6. Open Payment Methods again.

## Expected Result

The card should appear immediately after successful addition.

## Status

Not Executed
