# TC-001 — Verify Shared Link Is Clickable

## Related Defect

- BR-001

## Objective

Verify that shared post URLs are sent as clickable hyperlinks.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open the Activity screen.
2. Open an existing post.
3. Tap Share.
4. Choose an external messaging application.
5. Send the shared content.

## Expected Result

The shared URL should be formatted as a clickable hyperlink.

## Status

Not Executed
