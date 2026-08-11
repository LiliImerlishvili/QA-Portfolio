# TC-001 — 001 Verify Keyboard Does Not Cover CTA

## Related Defect

- BR-001

## Objective

Verify that the keyboard does not block the final CTA.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Open the inspiration creation form.
2. Focus the final input field.
3. Keep the keyboard open.
4. Attempt to submit the form.

## Expected Result

- The screen scrolls or resizes automatically.
- The CTA remains visible and tappable.
- The form can be submitted without manually dismissing the keyboard.

## Status

Not Executed
