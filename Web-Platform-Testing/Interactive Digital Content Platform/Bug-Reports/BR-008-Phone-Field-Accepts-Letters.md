# BR-008 — Phone Number Field Accepts Letters Without Validation

## Summary

A phone number field accepts alphabetic characters and does not display validation feedback.

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

1. Open the purchase or contact form.
2. Enter letters in the phone number field.
3. Submit or continue.

## Actual Result

The field accepts letters and no validation message is displayed.

## Expected Result

The field should restrict unsupported characters and show clear validation feedback.

## User or Business Impact

Invalid phone numbers can be submitted and used in downstream processes.

## Attachment

Evidence is available in the original defect management system. Sensitive URLs and account data are intentionally omitted.
