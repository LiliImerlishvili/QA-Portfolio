# TC-005 — Verify Bug Report Edit Permissions

## Related Defect

- BR-005

## Objective

Verify that a report creator can edit their own bug report.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Preconditions

- The user is authenticated.

## Test Steps

1. Create a new bug report.
2. Open the created report.
3. Attempt to edit its content.

## Expected Result

The report creator should be able to edit the report according to role permissions.

## Status

Not Executed
