# TC-005 — Verify Payment Status When Only Some Invoices Are Paid

## Related Defect

- BR-003

## Objective

Verify the partly-paid state.

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

- A project has two invoices: one **Paid**, one **Sent**.

## Test Steps

1. Open **Financial Overview**.

## Expected Result

- Payment Status reflects a partly-paid state according to the defined business rule.

## Status

Not Executed
