# TC-007 — Verify Scan Finding Count Accuracy

## Related Defect

- BR-007

## Objective

Verify that scan summary counts match detected findings.

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

1. Run a security scan against a target with a known issue.
2. Wait for completion.
3. Open the scan report.
4. Compare summary count with the findings list.

## Expected Result

The summary count should match the actual number of detected findings.

## Status

Not Executed
