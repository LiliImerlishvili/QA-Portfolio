# TC-003 — Verify Mixed Selection Adds Only Not-Yet-Added Categories

## Related Defect

- BR-001

## Objective

Verify behavior when new and existing categories are selected together.

## Test Type

Edge case

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153 |

## Preconditions

- Some template categories are already added.

## Test Steps

1. Open **Add from Template**.
2. Select both added and not-added categories.
3. Submit.

## Expected Result

- Only new categories are added.
- The success message reflects the actual number added.

## Status

Not Executed
