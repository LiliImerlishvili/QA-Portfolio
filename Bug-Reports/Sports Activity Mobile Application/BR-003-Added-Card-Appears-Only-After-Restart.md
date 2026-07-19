# BR-003 — Added Payment Card Appears Only After Application Restart

## Summary

A newly added card does not appear immediately and becomes visible only after restarting the application.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Payment Methods.
2. Add a new card.
3. Return to the list.
4. Refresh the list.
5. Restart the application.
6. Open Payment Methods again.

## Actual Result

The card is absent until the application is restarted.

## Expected Result

The card should appear immediately after successful addition.

## User Impact

Users may believe the card was not saved.

## Attachment

Evidence available in the original defect management system.
