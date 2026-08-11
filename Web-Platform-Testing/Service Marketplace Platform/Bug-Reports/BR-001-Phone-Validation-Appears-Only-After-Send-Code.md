# BR-001 — Phone Number Validation Appears Only After Send Code

## Summary

The registration form does not display phone number validation while the user types or leaves the field.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- The relevant user role is authenticated unless otherwise stated.
- The required workflow is available.

## Steps to Reproduce

1. Open the registration page.
2. Focus the phone number field.
3. Enter invalid characters, spaces, Latin letters, or Georgian letters.
4. Do not click Send Code.
5. Observe the field.

## Actual Result

No validation message is shown until the user clicks Send Code.

## Expected Result

The field should validate during typing or on blur and display a clear message before submission.

## User or Business Impact

Users receive delayed feedback and may believe invalid input is acceptable.

## Attachment

Evidence available in the original defect management system.
