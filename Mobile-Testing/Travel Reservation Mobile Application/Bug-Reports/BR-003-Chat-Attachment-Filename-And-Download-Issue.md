# BR-003 — Chat Attachment Displays an Incorrect File Name and Cannot Be Downloaded

## Summary

A document shared in the chat is displayed with an incorrect or unclear file name, and the recipient cannot download or open the attachment.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| OS Version | iOS 26.4.2 |
| Application Version | 1.0 (4) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is logged in.
- A chat conversation is available.
- A valid document file is available for upload.

## Steps to Reproduce

1. Open an existing chat conversation.
2. Attach and send a document.
3. Open the sent attachment from the chat.
4. Attempt to download or view the document.

## Actual Result

The attachment is displayed with an incorrect or unclear file name.

The document cannot be downloaded or opened from the chat.

## Expected Result

The attachment should display the original file name or a clear generated file name with the correct extension.

The recipient should be able to download and open the document successfully.

If the download fails, the application should display a clear error message.

## User Impact

Users cannot access documents shared through the chat, which blocks an important communication flow and may result in repeated uploads or the use of external messaging