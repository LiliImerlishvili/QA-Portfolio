# BR-007 — Mandatory Payment Fields Are Not Validated

## Summary

Required payment fields can be left empty and the form proceeds without showing validation messages.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The relevant feature is available.
- The user has the required access level.

## Steps to Reproduce

1. Open a paid-content purchase flow.
2. Proceed to the payment modal.
3. Leave one or more required payment fields empty.
4. Submit the payment form.

## Actual Result

The form does not validate all mandatory fields and may continue with incomplete data.

## Expected Result

Every required field should be validated before submission and display a specific error message.

## User or Business Impact

The purchase flow may fail, create invalid transactions, or confuse users.

## Attachment

Evidence is available in the original defect management system. Sensitive URLs and account data are intentionally omitted.
