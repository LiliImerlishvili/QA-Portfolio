# BR — Comment Author Profile Can Be Opened Unexpectedly

## Summary

The comment author's profile can be opened from the activity screen when the intended interaction should remain limited.

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

1. Open Activity.
2. Open a post with comments.
3. Tap the comment author's name or avatar.

## Actual Result

The application navigates to the author's profile.

## Expected Result

Navigation should follow the defined privacy and interaction rules.

## User Impact

The behavior may expose profile access beyond intended limits.

## Attachment

Evidence available in the original defect management system.
