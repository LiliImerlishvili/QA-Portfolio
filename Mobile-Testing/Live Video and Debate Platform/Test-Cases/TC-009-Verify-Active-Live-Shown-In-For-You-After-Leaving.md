# TC-009 — Verify Active Live Is Shown in For You Feed After Leaving and Refreshing

## Related Defect

- BR-005

## Objective

Verify the UI state of the feed after the user leaves an active live debate and refreshes.

## Test Type

Positive

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Development |
| Platform | Web |
| Device | Lenovo laptop (Windows, Build 26200) |
| Browser Version | 154.0.8037.98 |
| Web Version | 1.21.0 |

## Preconditions

- The user has left an active live debate.

## Test Steps

1. Refresh the page.
2. Open the **For You** feed.

## Expected Result

- The **Join pre-room** button is no longer displayed.
- The active live debate is displayed in the **For You** feed.

## Status

Not Executed
