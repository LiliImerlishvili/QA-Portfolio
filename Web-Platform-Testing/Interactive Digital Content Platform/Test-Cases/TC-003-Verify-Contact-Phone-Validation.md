# TC-003 — Verify Contact Phone Validation

## Related Defect

- BR-003

## Objective

Verify that invalid phone characters are rejected.

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

1. Open the Contact form.
2. Fill in the required fields.
3. Enter invalid letters and special characters in the phone field.
4. Submit the form.

## Expected Result

The phone field should accept only permitted phone number characters and display a clear validation message for invalid input.

## Status

Not Executed
