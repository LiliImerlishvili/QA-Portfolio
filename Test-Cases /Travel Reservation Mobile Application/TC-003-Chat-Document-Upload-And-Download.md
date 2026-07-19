# TC-003 — Verify Chat Document Upload, File Name Display, and Download

## Related Defect

- BR-003 — Chat Attachment Displays an Incorrect File Name and Cannot Be Downloaded

## Objective

Verify that a document uploaded in chat keeps a clear file name and can be opened or downloaded successfully.

## Preconditions

- The user is logged in.
- An active chat conversation is available.
- A supported document file is available for upload.

## Test Data

- Supported document file, for example: `Booking-Confirmation.pdf`

## Test Steps

1. Open an existing chat conversation.
2. Tap the attachment option.
3. Select a supported document file.
4. Send the document.
5. Verify the displayed file name in the chat.
6. Tap the sent attachment.
7. Attempt to open or download the document.

## Expected Result

- The document should upload successfully.
- The original file name, or a clear generated file name, should be displayed.
- The correct file extension should be visible.
- The attachment should open or download successfully.
- If the operation fails, the application should display a clear error message and retry option.

## Priority

High

## Test Type

Functional / File Handling / Chat

## Status

Not Executed