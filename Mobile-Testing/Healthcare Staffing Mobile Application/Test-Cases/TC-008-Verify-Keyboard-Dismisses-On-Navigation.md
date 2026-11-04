# TC-008 — Verify Keyboard Dismisses When Proceeding to the Next Page

## Related Defect

- BR-004

## Objective

Verify that the keyboard closes automatically when the user navigates away from a form.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | HONOR X5c |
| Operating System | Android 15, MagicOS 9.0 |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on a page with editable input fields.

## Test Steps

1. Tap a text input field and enter a value.
2. Complete the required fields.
3. Tap the button to proceed to the next page.

## Expected Result

- The keyboard dismisses automatically.
- The next page is displayed and fully usable.

## Status

Not Executed
