# BR-001 — Selected AI Provider Is Ignored During Scan Analysis

## Summary

The system uses a different AI provider than the one explicitly selected for scan analysis.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- The relevant project and feature are available.

## Steps to Reproduce

1. Open the scan flow.
2. Enter a valid target URL.
3. Select a non-default AI provider.
4. Run the scan.
5. Review the AI analysis result.

## Actual Result

The scan uses another provider and returns an error from that provider.

## Expected Result

The analysis should use the provider selected by the user.

## User or Business Impact

Provider selection becomes unreliable and scans may fail unexpectedly.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
