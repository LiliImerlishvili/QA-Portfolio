# BR-006 — Password Field Accepts Georgian Characters and Spaces

## Summary

The password field accepts Georgian characters and spaces during registration.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open registration.
2. Complete required fields.
3. Enter a password containing Georgian characters and spaces.
4. Confirm the password.
5. Submit.

## Actual Result

The application accepts the password and continues registration.

## Expected Result

Unsupported characters and spaces should be rejected with a clear validation message.

## User Impact

Password validation is inconsistent and may create authentication issues.

## Attachment

Evidence available in the original defect management system.
