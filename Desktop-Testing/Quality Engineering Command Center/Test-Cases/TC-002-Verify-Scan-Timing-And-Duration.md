# TC-002 — Verify Scan Timing And Duration

## Related Defect

- BR-002

## Objective

Verify that scan timestamps and duration are accurate.

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

1. Run a scan.
2. Open the scan report.
3. Review start time, completion time, and duration.

## Expected Result

Completion time should be later than start time and duration should match the actual scan runtime.

## Status

Not Executed
