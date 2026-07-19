# BR-004 — Both Old and New Passwords Remain Valid After Password Change

## Summary

After changing the password, the user can still authenticate with both the old password and the new password.

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
2. Open Security or Password settings.
3. Change the password successfully.
4. Log out.
5. Log in with the new password.
6. Log out again.
7. Log in with the old password.

## Actual Result

Authentication succeeds with both passwords.

## Expected Result

After a successful password change, only the new password should remain valid and the old password should be invalidated immediately.

## User Impact

The user's account remains accessible with compromised old credentials.

## Business Impact

This is a serious account-security and credential-integrity issue.

## Attachment

Evidence available in the original defect management system.
