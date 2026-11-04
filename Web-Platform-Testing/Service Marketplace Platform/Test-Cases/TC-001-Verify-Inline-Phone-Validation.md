# TC-001 — Verify Inline Phone Validation

## Related Defect

- BR-001

## Objective

Verify invalid phone input is validated before Send Code.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Preconditions

- The user is not registered.

## Test Steps

1. Open the registration page.
2. Focus the phone number field.
3. Enter invalid characters, spaces, Latin letters, or Georgian letters.
4. Do not click Send Code.
5. Observe the field.

## Expected Result

The field should validate during typing or on blur and display a clear message before submission.

## Status

Not Executed
