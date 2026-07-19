# BR — Shared Post Link Is Sent as Plain Text Instead of a Clickable Hyperlink

## Summary

Sharing a post to another platform sends the URL as plain text instead of a clickable hyperlink.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open the Activity screen.
2. Open an existing post.
3. Tap Share.
4. Choose an external messaging application.
5. Send the shared content.

## Actual Result

The URL appears as plain text and cannot be tapped directly.

## Expected Result

The shared URL should be formatted as a clickable hyperlink.

## User Impact

Recipients must copy and paste the URL manually, reducing usability.

## Attachment

Evidence available in the original defect management system.
