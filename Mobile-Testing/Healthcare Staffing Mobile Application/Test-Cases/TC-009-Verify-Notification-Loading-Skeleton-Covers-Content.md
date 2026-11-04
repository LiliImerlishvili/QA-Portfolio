# TC-009 — Verify Notification Loading Skeleton Fully Covers Content

## Related Defect

- BR-005

## Objective

Verify the loading state when a notification is opened.

## Test Type

UI

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Devices | HONOR X5c (Android 15, MagicOS 9.0); Pixel 9 Pro XL Emulator (Android 16.0) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user has received at least one notification.

## Test Steps

1. Tap **Notifications**.
2. Open a notification.
3. Observe the screen while content loads.

## Expected Result

- Only the skeleton placeholders are visible while loading.
- No underlying text or UI elements are visible.
- Content replaces the skeleton after loading.

## Status

Not Executed
