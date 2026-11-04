# TC-010 — Verify Video Upload Completes on a Stable Connection

## Related Defect

- BR-006

## Objective

Verify that a video uploads successfully without the app entering the "Reconnecting..." state.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 27.0 |
| Application Version | 1.21.0 (1.0.489) |

## Preconditions

- The user is logged in.
- A video prepared for upload exists on the device.
- The device has a stable internet connection.

## Test Steps

1. Tap the **"+"** button.
2. Select **Upload Video**.
3. Select a video and start the upload.

## Expected Result

- The upload progress is displayed.
- The app does not enter the "Reconnecting..." state.
- The video is published and visible on the user's profile.

## Status

Not Executed
