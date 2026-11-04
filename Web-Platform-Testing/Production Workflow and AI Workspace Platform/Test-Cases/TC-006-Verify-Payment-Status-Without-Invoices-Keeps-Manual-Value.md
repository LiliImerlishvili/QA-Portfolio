# TC-006 — Verify Project Without Invoices Keeps the Manually Set Payment Status

## Related Defect

- BR-003

## Objective

Verify that a project with no invoices keeps its manually set status.

## Test Type

Edge case

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

- A project has no invoices.

## Test Steps

1. Set Payment Status manually.
2. Refresh the page and re-login.

## Expected Result

- The manually set Payment Status persists.

## Status

Not Executed
