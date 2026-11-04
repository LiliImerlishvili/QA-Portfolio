# TC-003 — Verify Application Redirects to Login After Site Data Is Cleared

## Related Defect

- BR-003

## Objective

The application must recover to a valid logged-out state after site data is cleared.

## Test Type

Negative

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- The user has a registered account and is logged in.

## Test Steps

1. Clear site data from browser storage.
2. Return to the application tab.
3. Open the profile page.

## Expected Result

- No client-side exception occurs.
- The user is redirected to the Login page.

## Status

Not Executed
