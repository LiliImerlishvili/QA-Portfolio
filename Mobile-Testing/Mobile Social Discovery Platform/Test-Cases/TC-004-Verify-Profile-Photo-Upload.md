# TC-004 — Verify Profile Photo Upload

## Related Defect

- BR-004

## Objective

Verify that a valid image can be uploaded as the profile photo.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user is logged in.
- A valid image (supported format and size) exists in the device gallery.
- The app has photo library permission.

## Test Steps

1. Open the profile screen.
2. Tap **Change Photo**.
3. Select a valid image.
4. Confirm the upload.

## Expected Result

- The upload completes without an error.
- The new photo is displayed on the profile.
- The photo persists after app relaunch.

## Status

Not Executed
