# TC-006 — Verify Password Confirmation Mismatch Validation

## Related Defect

- None (additional coverage)

## Objective

Verify validation when passwords do not match.

## Test Type

Negative

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- The user is on the password step of registration.

## Test Steps

1. Enter a password.
2. Enter a different confirmation password.
3. Click **Create Account ID**.

## Expected Result

- A clear mismatch message is displayed.
- The account is not created.

## Status

Not Executed
