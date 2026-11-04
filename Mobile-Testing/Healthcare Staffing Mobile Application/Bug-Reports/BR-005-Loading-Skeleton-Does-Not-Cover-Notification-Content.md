# BR-005 — Loading Skeleton Does Not Fully Cover Notification Content While Loading

## Type

Bug

## Summary

When a notification is opened, loading skeleton placeholders are shown on top of partially visible real content.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device 1 | HONOR X5c — Android 15, MagicOS 9.0 |
| Device 2 | Pixel 9 Pro XL (Android Emulator) — Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% on both devices |

## Severity

Medium

## Priority

High

## Preconditions

- The user is registered and logged in.
- The user has already received one or more notifications.

## Steps to Reproduce

1. Tap the **Notifications** button.
2. Open a received notification.
3. Observe the screen while the notification content is loading.

## Actual Result

Loading skeleton placeholders are displayed, but the actual notification content remains partially visible in the background. Text and UI elements can be seen behind or around the skeleton placeholders.

## Expected Result

The loading skeleton should fully cover or replace the notification content while it is loading. No underlying text or UI elements should be visible until the content is fully loaded.

## User Impact

Overlapping content looks broken and makes notification details hard to read during loading.

## Business Impact

Visual glitches lower the perceived quality of the application.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
