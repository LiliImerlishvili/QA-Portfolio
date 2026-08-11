# BR-001 — No Validation Feedback for Invalid Email or Phone Number on Forgot Password

## Summary

On iOS, the Forgot Password screen provides no validation feedback after the user enters an invalid email address or phone number and taps **Continue**.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| OS Version | iOS 26.4.2 |
| Application Version | 1.0 (4) |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- The application is installed.
- The user is on the Login screen.

## Steps to Reproduce

1. Tap **Already have an account? Login**.
2. Tap **Forgot Password**.
3. Enter an invalid value in the **Email or phone number** field, for example `martivi:D`.
4. Tap **Continue**.

## Actual Result

Nothing happens after tapping **Continue**.

The user receives no validation message, no inline error, no toast, and no other feedback explaining why the entered value is invalid.

## Expected Result

The application should validate the entered email address or phone number before submitting the request.

If the value is invalid, the user should see a clear and actionable validation message, such as:

> Enter a valid email address or phone number.

The invalid field should also be visually highlighted.

## User Impact

Users cannot understand why the password recovery flow does not continue, which may prevent them from recovering access to their account.

## Attachment

Evidence available in the original defect management system.