# TC-007 — Verify Overdue Summary Card Counts Overdue Invoices

## Related Defect

- BR-004

## Objective

Verify that invoices marked Overdue are counted on the Overdue card.

## Test Type

Positive

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

- At least one invoice has the **Overdue** status.

## Test Steps

1. Open the **Invoices** page.
2. Observe the **Overdue** card.

## Expected Result

- The card shows the correct number of overdue invoices.
- The card shows their total amount.
- The **Outstanding** total includes them.

## Status

Not Executed
