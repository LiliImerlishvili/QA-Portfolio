# BR-006 — Finding Import Creates Duplicate Test Cases and Sync Error

## Summary

Importing a finding as a test case creates duplicates and returns a synchronization error.

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

High

## Preconditions

- The user is authenticated.
- The relevant project and feature are available.

## Steps to Reproduce

1. Open the findings section.
2. Select an existing finding.
3. Choose Import as Test Case.
4. Observe the created records.

## Actual Result

Duplicate test cases are created and a sync error is displayed.

## Expected Result

Exactly one test case should be created without synchronization errors.

## User or Business Impact

Test libraries become inconsistent and duplicated.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
