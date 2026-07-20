# TC-003 — Verify Keyboard Does Not Cover Input

## Related Defect

- BR-003

## Objective

Verify that the keyboard never overlaps the active input field.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Open a typing exercise.
2. Focus the input field.
3. Type continuously.
4. Observe layout movement.

## Expected Result

- The input field remains visible above the keyboard.
- The layout resizes or scrolls correctly.

## Status

Not Executed
