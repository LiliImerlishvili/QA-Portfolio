# TC-009 — 009 Verify Password Change Applies Everywhere

## Related Defect

- BR-009

## Objective

Verify that a changed password is accepted across all security-sensitive actions.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Change the password.
2. Confirm the success message.
3. Use the new password for login.
4. Use the new password for Delete Account or another protected action.

## Expected Result

- The new password is accepted consistently.
- The old password is rejected.

## Status

Not Executed
