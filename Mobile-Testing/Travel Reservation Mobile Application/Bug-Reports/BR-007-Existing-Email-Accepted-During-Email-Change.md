# BR-007 — Existing Email Address Is Accepted During Email Change

## Summary

The application allows a user to submit an email address that is already registered to another account during the email change flow.

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

Critical

## Priority

Urgent

## Preconditions

- The user is logged in.
- At least two registered accounts exist.
- The email address of the second account is known.

## Steps to Reproduce

1. Launch the application.
2. Log in with a valid account.
3. Open profile or account settings.
4. Select the option to change the email address.
5. Enter an email address that is already registered to another account.
6. Submit the change.

## Actual Result

The application accepts the existing email address and allows the email change flow to continue.

No duplicate-email validation message is displayed.

## Expected Result

The application should verify email uniqueness before accepting the change.

If the email address is already registered, the request should be blocked and a clear validation message should be displayed, such as:

> This email address is already associated with another account.

The original account email should remain unchanged.

## User Impact

This may create account ownership conflicts, prevent users from logging in, or expose one account to another user.

## Business Impact

This issue creates a serious account integrity and security risk. It may result in duplicate account identifiers, unauthorized access, support incidents, and loss of user trust.

## Attachment

Evidence available in the original defect management system.