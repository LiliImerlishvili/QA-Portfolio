# TC-009 — Verify Overdue Amount Is Reflected in Reports and Dashboard

## Related Defect

- BR-004

## Objective

Verify cross-module consistency of overdue data.

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

- At least one invoice is Overdue.

## Test Steps

1. Open **Reports**.
2. Open the dashboard overdue list.

## Expected Result

- The overdue amount in Reports matches the Invoices summary.
- The invoice appears in the dashboard overdue list.

## Status

Not Executed
