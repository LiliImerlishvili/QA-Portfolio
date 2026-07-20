# TC-007 — Verify Space Key Preserves Typed Content

## Related Defect

- BR-007

## Objective

Verify that Space inserts a separator without deleting text.

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
2. Type a word.
3. Press Space.
4. Continue typing.

## Expected Result

- Previously typed content remains visible.
- One space is inserted.
- The next word becomes active.

## Status

Not Executed
