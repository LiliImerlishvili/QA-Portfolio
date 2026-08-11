# BR-003 — Contact Phone Field Accepts Invalid Characters

## Summary

The contact form phone field accepts invalid letters and special characters without validation.

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

- The relevant feature is available.
- The user has the required access level.

## Steps to Reproduce

1. Open the Contact form.
2. Fill in the required fields.
3. Enter invalid letters and special characters in the phone field.
4. Submit the form.

## Actual Result

The invalid value is accepted and no validation message is shown.

## Expected Result

The phone field should accept only permitted phone number characters and display a clear validation message for invalid input.

## User or Business Impact

Invalid contact information can be submitted and stored.

## Attachment

Evidence is available in the original defect management system. Sensitive URLs and account data are intentionally omitted.
