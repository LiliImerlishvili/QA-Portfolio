# TC-003 — Verify Chat Document Upload, File Name Display, and Download

## Related Defect

- BR-003 — Chat Attachment Displays an Incorrect File Name and Cannot Be Downloaded

## Objective

Verify that a document shared in the chat keeps a clear file name and can be downloaded and opened by the recipient.

## Preconditions

- The user is logged in.
- A chat conversation is available.
- A valid document file is available for upload.

## Test Data

- Valid document file (e.g., `test-document.pdf`)

## Test Steps

1. Open an existing chat conversation.
2. Attach and send the document.
3. Open the sent attachment from the chat.
4. Download or view the document.
5. Repeat steps 3–4 from the recipient's account.

## Expected Result

- The attachment displays the original file name or a clear generated name with the correct extension.
- The sender and the recipient can download and open the document successfully.
- If the download fails, a clear error message is displayed.

## Priority

High

## Test Type

Functional / Positive

## Status

Not Executed
