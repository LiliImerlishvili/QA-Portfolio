# BR-003 — Payment Status in Financial Overview Remains Unpaid Despite a Paid Invoice

## Type

Bug

## Summary

For a project whose only linked invoice is Paid, the Financial Overview still shows Payment as Due and Payment Status as Unpaid.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Severity

Critical

## Priority

Urgent

## Status

Fixed — ready for retest

## Preconditions

- The user is logged in with the **Member** role.
- The user is in a test workspace.
- A test project already exists.
- An invoice (e.g., `INV-MEMBER-FV1-001`) is linked to the project.
- The invoice amount is **1234.56 USD**.
- The invoice status is **Paid**.
- In the project's **Budgets & Invoices** section, the invoice is shown as Paid and **Invoiced = $1,235**.

## Steps to Reproduce

1. Open the test project.
2. Refresh the page.
3. Open **Financial Overview**.
4. Check the **Working Actuals**, **Payment** and **Payment Status** values.

## Actual Result

**Financial Overview** shows:

- **Working Actuals:** `—`
- **Payment:** `Due`
- **Payment Status:** `Unpaid`

This is displayed even though the invoice linked to the project is **Paid** and the **Budgets & Invoices** section shows **Invoiced = $1,235**.

## Expected Result

**Financial Overview** should reflect the current financial status of the Paid invoice linked to the project.

**Payment Status** should be **Paid**, and the related financial values should be updated according to the project's financial logic.

## User Impact

Within the same project, the invoice status and the Financial Overview status do not match, showing the user incorrect financial information.

## Business Impact

Inconsistent financial data can lead to wrong payment follow-ups and loss of trust in the platform's reporting.

## Resolution Notes

Payment Status was previously set only manually. It now follows the project's client invoices: all paid → Paid; some paid → partly paid; none paid → Unpaid. A project with no invoices keeps the manually set value. Working Actuals is calculated from the cost report, not from invoices, so `—` is expected until a cost report is attached. QA follow-up: when the status is set to Paid, it should also be reflected in the project details. Retest: mark the project's only invoice as Paid, then open Financial Overview.

## Attachment

Screen recording, console logs and network requests are available in the original defect management system.
