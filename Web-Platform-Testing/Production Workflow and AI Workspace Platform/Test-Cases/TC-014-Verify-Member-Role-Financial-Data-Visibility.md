# TC-014 — Verify Member Role Sees Only Permitted Financial Data

## Related Defect

- None (additional coverage)

## Objective

Verify role-based access to financial modules.

## Test Type

Permission

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- Users with Owner, Admin, Member and Guest roles exist in the same workspace.

## Test Steps

1. Log in as each role.
2. Open the project's **Financial Overview**, **Invoices** and **Reports**.

## Expected Result

- Each role sees only the data allowed by its permissions.
- Restricted actions are hidden or disabled.

## Status

Not Executed
