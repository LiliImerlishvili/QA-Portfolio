# BR-002 — Notification Settings Changes Are Not Persisted

## Summary

Changes made to notification settings are lost after leaving and reopening the settings screen.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is registered and logged in.
- Notification settings are available.

## Steps to Reproduce

1. Open the application.
2. Open Settings.
3. Open Notification Settings.
4. Change one or more toggle values.
5. Leave the screen.
6. Reopen Notification Settings.

## Actual Result

The settings return to their previous values.

## Expected Result

All notification preference changes should be saved and restored consistently after navigation and app relaunch.

## User Impact

Users cannot control which notifications they receive.

## Attachment

Evidence available in the original defect management system.
