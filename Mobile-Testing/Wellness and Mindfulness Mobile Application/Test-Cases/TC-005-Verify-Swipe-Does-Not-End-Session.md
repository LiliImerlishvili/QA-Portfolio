# TC-005 — 005 Verify Swipe Does Not End Session

## Related Defect

- BR-005

## Objective

Verify that swipe gestures do not terminate an authenticated session.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Log in.
2. Navigate across authenticated screens.
3. Swipe downward from the top edge several times.

## Expected Result

- The user remains logged in.
- No session state changes occur.

## Status

Not Executed
