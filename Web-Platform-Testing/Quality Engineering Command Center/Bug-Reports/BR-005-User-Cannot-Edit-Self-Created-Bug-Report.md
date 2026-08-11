# BR-005 — User Cannot Edit a Self-Created Bug Report

## Summary

A user cannot edit a bug report they created.

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

1. Create a new bug report.
2. Open the created report.
3. Attempt to edit its content.

## Actual Result

The edit action is unavailable or disabled.

## Expected Result

The report creator should be able to edit the report according to role permissions.

## User or Business Impact

Users cannot correct or update their own QA documentation.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
