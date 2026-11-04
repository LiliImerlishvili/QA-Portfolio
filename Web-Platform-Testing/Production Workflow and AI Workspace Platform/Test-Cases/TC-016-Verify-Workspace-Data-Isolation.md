# TC-016 — Verify Financial Data Is Isolated Between Workspaces

## Related Defect

- None (additional coverage)

## Objective

Verify multi-workspace data isolation.

## Test Type

Security

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

- The user is a member of two workspaces with different projects and invoices.

## Test Steps

1. Open Invoices and Reports in workspace A.
2. Switch to workspace B.

## Expected Result

- Workspace B shows only its own invoices and totals.
- No data from workspace A is visible.

## Status

Not Executed
