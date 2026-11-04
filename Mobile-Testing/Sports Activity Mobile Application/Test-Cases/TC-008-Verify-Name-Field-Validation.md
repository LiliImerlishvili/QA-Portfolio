# TC-008 — Verify Name Field Validation

## Related Defect

- BR-008

## Objective

Verify name fields reject special characters.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open Edit Profile.
2. Enter special characters in First Name and Last Name.
3. Save the profile.

## Expected Result

The fields should allow only valid name characters and show clear validation.

## Status

Not Executed
