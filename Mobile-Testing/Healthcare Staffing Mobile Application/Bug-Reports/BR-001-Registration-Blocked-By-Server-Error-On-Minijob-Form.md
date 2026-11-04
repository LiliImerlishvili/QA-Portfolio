# BR-001 — Registration Cannot Be Completed Due to proc_open() Error on Minijob Form

## Type

Bug

## Summary

On the final step of the Minijob form, tapping Confirm returns a server-side error and the user cannot complete registration. The Employer (Arbeitgeber) fields are also not editable.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is registered and logged in.
- The user is on the final `10/10` Minijob form step.
- Required employee fields are filled in.

## Steps to Reproduce

1. Tap **Confirm**.
2. Tap **OK** on the displayed error message.

## Actual Result

The application displays the following error:

```
Call to undefined function mikehaertl\shellcommand\proc_open()
```

After tapping **OK**, the user is returned to the same Minijob form page and cannot complete the registration flow. Additionally, the Arbeitgeber (Employer) fields are not editable, so the user cannot enter employer information.

## Expected Result

The Minijob form should be processed successfully without a server-side error, and the user should be able to complete the registration flow.

If the Arbeitgeber fields are intended to be completed by the user, they should be editable. If they are not intended for user input, their non-editable state should not prevent successful form submission.

## User Impact

New healthcare professionals cannot finish registration and therefore cannot receive shifts or job offers.

## Business Impact

A blocked registration funnel directly prevents onboarding of new workforce. Exposing a raw server error also reveals internal implementation details.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
