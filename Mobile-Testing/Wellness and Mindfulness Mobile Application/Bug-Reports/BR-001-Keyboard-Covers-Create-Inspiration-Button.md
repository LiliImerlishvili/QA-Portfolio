# BR-001 — Keyboard Covers the Create Inspiration Button

## Summary

While completing the inspiration creation form, the on-screen keyboard covers the **Create Inspiration** button and prevents the user from proceeding.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

High

## Priority

Normal

## Preconditions

- The user is registered and logged in.
- The inspiration creation screen is open.

## Steps to Reproduce

1. Open the application.
2. Navigate to the inspiration creation flow.
3. Enter text in the final input field.
4. Keep the keyboard open.
5. Attempt to tap **Create Inspiration**.

## Actual Result

The keyboard overlaps the CTA and the button cannot be tapped.

## Expected Result

The screen should scroll or resize automatically so that the active field and CTA remain visible above the keyboard.

## User Impact

Users cannot complete the inspiration creation flow without manually dismissing the keyboard.

## Attachment

Evidence available in the original defect management system.
