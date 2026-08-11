# BR-002 — Vacancy Is Assigned to an Incorrect Category

## Summary

The automatic categorization process assigns a vacancy to an unrelated category.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Open the vacancy import or review flow.
2. Select a vacancy from a finance-related domain.
3. Review the automatically assigned category.

## Actual Result

The vacancy is assigned to an unrelated category.

## Expected Result

The system should assign the correct category or use a safe default when confidence is low.

## User or Business Impact

Incorrect categorization reduces search quality and data reliability.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
