# BR-007 — Scan Report Shows Zero Findings Despite Detected Issues

## Summary

The scan report displays zero findings even though the scan detected at least one real issue.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated.
- The relevant project and feature are available.

## Steps to Reproduce

1. Run a security scan against a target with a known issue.
2. Wait for completion.
3. Open the scan report.
4. Compare summary count with the findings list.

## Actual Result

The summary shows zero findings while the findings section contains detected issues.

## Expected Result

The summary count should match the actual number of detected findings.

## User or Business Impact

Security reporting is misleading and may hide real risks.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
