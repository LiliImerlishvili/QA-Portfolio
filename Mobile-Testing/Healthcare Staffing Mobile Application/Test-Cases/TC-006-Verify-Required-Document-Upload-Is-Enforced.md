# TC-006 — Verify Required Document Upload Is Enforced

## Related Defect

- BR-003

## Objective

Verify that the user cannot proceed without uploading all documents marked as Required.

## Test Type

Negative

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

- The user is on the Required Documents page.
- A document marked as Required has not been uploaded.

## Test Steps

1. Tap **Confirm** without uploading the required document.

## Expected Result

- The user cannot proceed.
- A validation message names the missing required document.

## Status

Not Executed
