# BR-005 — Contact Support Message Time Is Displayed Incorrectly

## Summary

Sent messages in Contact Support display an incorrect timestamp.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Help & Support.
2. Open Contact Support.
3. Send a message.
4. Compare the displayed time with device time.

## Actual Result

The displayed message time differs from the actual local time.

## Expected Result

The timestamp should match the user's local device time.

## User Impact

Support conversation history becomes misleading.

## Attachment

Evidence available in the original defect management system.
