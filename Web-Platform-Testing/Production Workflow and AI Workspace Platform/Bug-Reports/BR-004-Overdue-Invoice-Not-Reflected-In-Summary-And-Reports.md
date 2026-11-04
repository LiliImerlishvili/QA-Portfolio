# BR-004 — Overdue Invoice Is Not Reflected in the Overdue Summary and Reports

## Type

Bug

## Summary

An invoice with Overdue status is not counted in the Overdue summary card on the Invoices page and is not reflected in Reports.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Severity

High

## Priority

High

## Status

Fixed — ready for retest

## Preconditions

- The user is registered in the system.
- A project exists in the system.
- Several invoices are linked to the project.
- At least one invoice has the **Overdue** status.

## Steps to Reproduce

1. Open the **Invoices** page.
2. Find an invoice with the **Overdue** status.
3. Observe the **Overdue** summary card.
4. Go to the **Reports** page.
5. Check whether the Overdue invoice amount is reflected in Reports.

## Actual Result

Although an invoice with the **Overdue** status exists in the system, the Overdue summary card shows:

- **Overdue:** `$0`
- **0 invoices**

The Overdue invoice amount is also not reflected on the **Reports** page.

## Expected Result

If an invoice with the **Overdue** status exists in the system:

- the **Overdue** summary card should show the number of corresponding invoices;
- their total amount should be displayed;
- the corresponding Overdue amount should also be reflected on the **Reports** page, according to the Reports aggregation logic.

## User Impact

Overdue invoices are not counted in the financial summary and Reports, so the user receives incorrect information about the number and amount of overdue invoices.

## Business Impact

Missed overdue payments directly affect cash-flow visibility and collections.

## Resolution Notes

The Overdue card only counted invoices with status Sent whose due date had passed; invoices already marked Overdue were skipped. Both are now counted on the Invoices summary (Overdue and Outstanding) and on the dashboard's overdue list. Retest: mark one invoice as Overdue and check that the Overdue card shows its count and amount.

## Attachment

Screen recording, console logs and network requests are available in the original defect management system.
