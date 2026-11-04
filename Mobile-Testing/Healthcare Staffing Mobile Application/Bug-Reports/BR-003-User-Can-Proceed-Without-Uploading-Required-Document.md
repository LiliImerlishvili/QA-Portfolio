# BR-003 — User Can Proceed Without Uploading a Required Document

## Type

Bug

## Summary

On the Required Documents page, the user can proceed to the next step without uploading a document that is marked as Required.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is registered and logged in.
- The user is on the Required Documents page.
- `Mitgliedsbescheinigung Krankenkasse` (health insurance membership certificate) is marked as Required and has not been uploaded.

## Steps to Reproduce

1. Tap the **Confirm** button without uploading the required document.

## Actual Result

The application allows the user to proceed to the next step without uploading the document marked as Required.

## Expected Result

The application should prevent the user from proceeding until all documents marked as Required are uploaded. A clear validation message should indicate which required document is missing.

## User Impact

Users may believe their profile is complete and later be rejected or delayed for shifts.

## Business Impact

Incomplete compliance documents can lead to unqualified or non-compliant staffing assignments in healthcare facilities.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
