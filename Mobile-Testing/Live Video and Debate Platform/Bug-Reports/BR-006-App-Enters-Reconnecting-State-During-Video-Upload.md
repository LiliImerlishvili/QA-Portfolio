# BR-006 — [iOS] App Enters "Reconnecting..." State During Video Upload

## Summary

While uploading a video through the upload flow, the application switches to the "Reconnecting..." state and the video being uploaded is not displayed on the screen at all.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 27.0 |
| Application Version | 1.21.0 (1.0.489) |

## Severity

Critical

## Priority

High

## Preconditions

- The user is logged in.
- A video prepared for upload exists on the device.

## Steps to Reproduce

1. Tap the **"+"** button.
2. Select **Upload Video**.
3. Select the desired video and start the upload.

## Actual Result

During the video upload, the application switches to the "Reconnecting..." state. The video being uploaded is not displayed on the screen at all.

## Expected Result

With a stable internet connection, the video should upload successfully without the application switching to the "Reconnecting..." state.

## User Impact

Users cannot publish their video content and receive no clear feedback about the upload progress.

## Business Impact

User-generated video is core content for the platform; a failing upload flow directly reduces content creation.

## Attachment

Evidence (screen recording, console logs and network requests) available in the original defect management system.
