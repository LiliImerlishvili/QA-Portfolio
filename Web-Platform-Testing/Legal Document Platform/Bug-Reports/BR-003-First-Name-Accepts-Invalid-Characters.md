# BR-003 — First Name Field Accepts Invalid Characters

## Summary

The partner First Name field accepts invalid symbols or unsupported characters.

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

1. Open partner creation.
2. Enter invalid symbols in First Name.
3. Complete remaining required fields.
4. Save.

## Actual Result

The invalid value is accepted and stored.

## Expected Result

The field should accept only permitted name characters and display a clear validation message.

## User or Business Impact

Invalid partner data can be stored in the system.

## Attachment

Evidence available in the original defect management system.
