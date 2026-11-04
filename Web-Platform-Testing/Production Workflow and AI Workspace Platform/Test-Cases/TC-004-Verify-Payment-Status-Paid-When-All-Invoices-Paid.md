# TC-004 — Verify Payment Status Is Paid When All Project Invoices Are Paid

## Related Defect

- BR-003

## Objective

Verify Financial Overview payment status for a fully paid project.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- The user has the Member role.
- A project has one linked invoice with status **Paid**.

## Test Steps

1. Open the project.
2. Refresh the page.
3. Open **Financial Overview**.

## Expected Result

- **Payment Status** shows **Paid**.
- Status matches the **Budgets & Invoices** section.
- Status is also reflected in the project details.

## Status

Not Executed
