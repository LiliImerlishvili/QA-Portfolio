# TC-015 — Verify Financial Data Persists After Refresh and Re-Login

## Related Defect

- None (additional coverage)

## Objective

Verify data persistence of financial values.

## Test Type

Positive

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- A project has invoices and a budget.

## Test Steps

1. Note the Financial Overview values.
2. Refresh the page.
3. Log out and log in again.

## Expected Result

- All values are unchanged after refresh and re-login.

## Status

Not Executed
