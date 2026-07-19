# TC-006 — Verify Chat Video Can Be Opened and Played

## Related Defect

- BR-006 — Chat Video Cannot Be Opened or Played

## Objective

Verify that a video shared in chat can be opened and played successfully from the media section.

## Preconditions

- The user is logged in.
- An existing chat conversation contains at least one video.
- The device has an active internet connection.

## Test Steps

1. Launch the application.
2. Log in with a valid account.
3. Open a chat conversation containing a video.
4. Open the **View Media** section.
5. Tap the video thumbnail.
6. Wait for the media viewer to load.
7. Start video playback.
8. Pause and resume the video.
9. Exit the media viewer.

## Expected Result

- The selected video should open successfully.
- A loading indicator should be displayed while the media loads.
- The video should start playing without errors.
- Pause and resume controls should work correctly.
- The user should be able to exit the media viewer and return to the chat.
- If playback fails, the application should display a clear error message and retry option.

## Priority

High

## Test Type

Functional / Media Playback / Chat

## Status

Not Executed