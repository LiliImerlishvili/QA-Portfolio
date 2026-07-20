# TC-004 — Verify Google Sign In After Cancellation

## Related Defect

- BR-004

## Objective

Verify that Google Sign-In can be retried after cancellation.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Tap Continue with Google.
2. Cancel authentication.
3. Retry Continue with Google.

## Expected Result

- No error is shown after cancellation.
- A fresh Google Sign-In flow opens on retry.

## Status

Not Executed
