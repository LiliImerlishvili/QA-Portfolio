# BR-009 — Password Change Shows Success but the New Password Is Not Fully Applied

## Summary

The application displays a successful password-change message, but the new password is not consistently accepted in later security actions.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is logged in.
- The user knows the current password.

## Steps to Reproduce

1. Open Settings.
2. Open Security.
3. Enter the current password and a new password.
4. Submit the password change.
5. Confirm the success message.
6. Open Delete Account or another password-protected action.
7. Enter the new password.

## Actual Result

The new password is rejected or the action reports an incorrect password.

## Expected Result

After the success message, the new password should be fully applied across authentication and all security-sensitive actions.

## User Impact

Users cannot rely on the password-change confirmation and may become locked out of security operations.

## Attachment

Evidence available in the original defect management system.
