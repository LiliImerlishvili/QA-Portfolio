# TS-003 — Chat Media and Document Sharing Flow

## Objective

Verify that users can share documents and videos in chat, view the correct file information, and open or download the shared content successfully.

## Preconditions

- The user is logged in.
- An active chat conversation is available.
- A supported document file and video file are available.
- The device has an active internet connection.

## Scenario

1. Launch the application.
2. Log in with a valid account.
3. Open an existing chat conversation.
4. Attach and send a supported document.
5. Verify that the file name and extension are displayed correctly.
6. Open or download the document.
7. Return to the chat.
8. Attach and send a supported video.
9. Open the **View Media** section.
10. Tap the video thumbnail.
11. Start video playback.
12. Pause and resume the video.
13. Exit the media viewer and return to the chat.

## Expected Result

- The document uploads successfully.
- The original or a clear generated file name is displayed.
- The correct file extension is visible.
- The document can be opened or downloaded successfully.
- The video appears in the **View Media** section.
- The video opens and plays successfully.
- Playback controls work correctly.
- The user can return to the chat without errors.
- Clear error feedback and a retry option are displayed if any media operation fails.

## Related Artifacts

- BR-003 — Chat Attachment Displays an Incorrect File Name and Cannot Be Downloaded
- BR-006 — Chat Video Cannot Be Opened or Played
- TC-003 — Verify Chat Document Upload, File Name Display, and Download
- TC-006 — Verify Chat Video Can Be Opened and Played
- CL-001 — Core Flows Checklist

## Priority

High

## Test Type

End-to-End / Functional / Chat / Media Handling

## Status

Not Executed