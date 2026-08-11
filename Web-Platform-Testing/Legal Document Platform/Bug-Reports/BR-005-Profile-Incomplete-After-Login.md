# BR-005 — Registered User Sees Profile Is Incomplete After Login

## Summary

A registered user receives a Profile is Incomplete message immediately after login.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open the login page.
2. Enter valid registered credentials.
3. Submit the login form.

## Actual Result

The system shows a Profile is Incomplete notification despite the account being registered.

## Expected Result

The user should access the account without a false profile-completeness warning.

## User or Business Impact

Users may believe their account is invalid or unfinished.

## Attachment

Evidence available in the original defect management system.
