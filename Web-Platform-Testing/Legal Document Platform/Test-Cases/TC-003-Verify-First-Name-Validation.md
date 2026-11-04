# TC-003 — Verify First Name Validation

## Related Defect

- BR-003

## Objective

Verify invalid symbols are rejected in the First Name field.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open partner creation.
2. Enter invalid symbols in First Name.
3. Complete remaining required fields.
4. Save.

## Expected Result

The field should accept only permitted name characters and display a clear validation message.

## Status

Not Executed
