# BR-008 — Account Deletion Does Not Complete With the Correct Password

## Summary

Entering the correct password in the Delete Account flow does not delete the account and provides no clear completion feedback.

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
- The correct account password is known.

## Steps to Reproduce

1. Open Settings.
2. Open Profile.
3. Open Account & Security.
4. Tap **Delete Account**.
5. Enter the correct password.
6. Confirm deletion.

## Actual Result

The account remains active and the flow does not complete correctly.

## Expected Result

The account should be deleted, the session should be terminated, and the user should be redirected to the unauthenticated screen with clear confirmation.

## User Impact

Users cannot exercise account deletion and data-removal rights.

## Business Impact

This may create compliance, privacy, and trust risks.

## Attachment

Evidence available in the original defect management system.
