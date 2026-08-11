# BR-007 — Reusing a Registered Email Shows an Incorrect Validation Message

## Summary

When a user enters an email address that is already registered, the application shows a generic or incorrect validation message instead of explaining that the email is already in use.

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

Urgent

## Preconditions

- An account already exists with the test email.
- The registration or inspiration setup form is available.

## Steps to Reproduce

1. Open the form.
2. Complete all required fields.
3. Enter an email address already associated with an account.
4. Submit the form.

## Actual Result

The application displays an unrelated or generic validation message.

## Expected Result

The request should be blocked with a clear message, such as:

> This email address is already registered.

## User Impact

Users cannot understand why submission fails.

## Attachment

Evidence available in the original defect management system.
