# TC-005 — Verify Deleted Content Does Not Reappear

## Related Defect

- BR-005

## Objective

Verify that deleted characters and words remain deleted.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Start an exercise.
2. Type content.
3. Delete part of it.
4. Continue typing.

## Expected Result

- Deleted content does not reappear.
- Input state remains consistent.

## Status

Not Executed
