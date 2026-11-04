# BR-004 — Keyboard Does Not Dismiss After Text Input and Blocks Navigation

## Type

Bug

## Summary

After entering text and tapping the button to proceed, the on-screen keyboard stays open and blocks the flow until the app is minimized and reopened.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | HONOR X5c |
| Operating System | Android 15, MagicOS 9.0 |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is registered and logged in.
- The user is on a page containing editable input fields.

## Steps to Reproduce

1. Tap any text input field.
2. Enter a value.
3. Complete the required fields.
4. Tap the button to proceed to the next page.
5. Observe the keyboard behavior.

## Actual Result

The keyboard remains open after text input and does not dismiss when the user attempts to proceed to another page. The user has to minimize the application and reopen it for the keyboard to disappear and continue the flow.

## Expected Result

The keyboard should dismiss automatically when the user taps the button to proceed to another page. The user should be able to continue the flow without minimizing and reopening the application.

## User Impact

Every form step requires a workaround, making registration and profile editing frustrating.

## Business Impact

Friction in multi-step forms increases drop-off during onboarding.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
