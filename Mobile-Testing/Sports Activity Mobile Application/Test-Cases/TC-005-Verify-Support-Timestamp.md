# TC-005 — Verify Support Timestamp

## Related Defect

- BR-005

## Objective

Verify support message time matches device time.

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

1. Open Help & Support.
2. Open Contact Support.
3. Send a message.
4. Compare the displayed time with device time.

## Expected Result

The timestamp should match the user's local device time.

## Status

Not Executed
