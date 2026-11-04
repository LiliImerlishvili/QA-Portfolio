# TC-008 — Verify Phone Field Rejects Letters

## Related Defect

- BR-008

## Objective

Verify that phone fields reject alphabetic input.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user has the required access level.

## Test Steps

1. Open the purchase or contact form.
2. Enter letters in the phone number field.
3. Submit or continue.

## Expected Result

The field should restrict unsupported characters and show clear validation feedback.

## Status

Not Executed
