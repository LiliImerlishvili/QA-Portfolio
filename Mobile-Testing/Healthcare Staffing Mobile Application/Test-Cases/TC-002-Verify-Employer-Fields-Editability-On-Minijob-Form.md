# TC-002 — Verify Employer (Arbeitgeber) Fields Behavior on Minijob Form

## Related Defect

- BR-001

## Objective

Verify that Employer fields are editable when user input is required, or do not block submission when they are read-only.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on the Minijob form.

## Test Steps

1. Tap each Arbeitgeber (Employer) field.
2. Try to enter a value.
3. Submit the form.

## Expected Result

- Fields intended for user input are editable.
- Read-only fields do not block form submission.

## Status

Not Executed
