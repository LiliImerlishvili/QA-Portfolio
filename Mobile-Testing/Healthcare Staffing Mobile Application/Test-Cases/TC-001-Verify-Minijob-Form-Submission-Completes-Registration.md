# TC-001 — Verify Minijob Form Submission Completes Registration

## Related Defect

- BR-001

## Objective

Verify that the final Minijob form step is submitted without a server error and registration completes.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on the final `10/10` Minijob form step.
- Required employee fields are filled in.

## Test Steps

1. Tap **Confirm**.

## Expected Result

- No server-side error is displayed.
- The form is submitted successfully.
- The user proceeds to the next step of the registration flow.

## Status

Not Executed
