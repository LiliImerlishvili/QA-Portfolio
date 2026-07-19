# TC-004 — 004 Verify Old Password Is Invalidated

## Related Defect

- BR-004

## Objective

Verify that the old password stops working after a password change.

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
2. Log out.
3. Log in with the new password.
4. Log out.
5. Attempt login with the old password.

## Expected Result

- The new password works.
- The old password is rejected.

## Status

Not Executed
