# TC-007 — 007 Verify Duplicate Email Validation

## Related Defect

- BR-007

## Objective

Verify that an already registered email is rejected with a specific message.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Test Steps

1. Open the form.
2. Complete all required fields.
3. Enter an already registered email.
4. Submit.

## Expected Result

- Submission is blocked.
- A clear duplicate-email message is shown.

## Status

Not Executed
