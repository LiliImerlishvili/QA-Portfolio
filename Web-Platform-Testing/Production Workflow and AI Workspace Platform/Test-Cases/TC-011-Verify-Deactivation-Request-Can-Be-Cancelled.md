# TC-011 — Verify Scheduled Deactivation Can Be Cancelled

## Related Defect

- BR-005

## Objective

Verify cancellation of a scheduled deactivation.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- A deactivation is scheduled.

## Test Steps

1. Open security settings.
2. Click **Cancel**.

## Expected Result

- The scheduled deactivation is removed.
- The account remains active.

## Status

Not Executed
