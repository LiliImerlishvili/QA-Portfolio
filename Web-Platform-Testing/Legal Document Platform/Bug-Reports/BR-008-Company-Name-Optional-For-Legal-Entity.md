# BR-008 — Company Name Is Optional for Legal Entity Partner Type

## Summary

The system allows saving a Legal Entity partner without a company name.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

High

## Priority

Urgent

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Add Partner.
2. Select Legal Entity.
3. Complete all other required fields.
4. Leave Company Name empty.
5. Save.

## Actual Result

The partner is created without a company name.

## Expected Result

Company Name should be mandatory when Legal Entity is selected.

## User or Business Impact

Incomplete legal records can be created.

## Attachment

Evidence available in the original defect management system.
