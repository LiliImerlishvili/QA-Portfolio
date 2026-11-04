# TC-006 — Verify Password Validation

## Related Defect

- BR-006

## Objective

Verify password fields reject unsupported characters and spaces.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Preconditions

- The user is not registered.

## Test Steps

1. Open registration.
2. Complete required fields.
3. Enter a password containing Georgian characters and spaces.
4. Confirm the password.
5. Submit.

## Expected Result

Unsupported characters and spaces should be rejected with a clear validation message.

## Status

Not Executed
