# TC-008 — Verify Sent Invoice Past Its Due Date Is Counted as Overdue

## Related Defect

- BR-004

## Objective

Verify the second overdue condition.

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

- An invoice has status **Sent** and its due date is in the past.

## Test Steps

1. Open the **Invoices** page.

## Expected Result

- The invoice is counted on the **Overdue** card.

## Status

Not Executed
