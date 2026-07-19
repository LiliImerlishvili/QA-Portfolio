# BR-002 — Scan Completion Time Is Earlier Than Start Time

## Summary

The scan completion timestamp is earlier than the start timestamp, causing an invalid duration.

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

1. Run a scan.
2. Open the scan report.
3. Review start time, completion time, and duration.

## Actual Result

The completion timestamp is earlier than the start timestamp and the duration is displayed incorrectly.

## Expected Result

Completion time should be later than start time and duration should match the actual scan runtime.

## User or Business Impact

Report timing data becomes inaccurate and unreliable.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
