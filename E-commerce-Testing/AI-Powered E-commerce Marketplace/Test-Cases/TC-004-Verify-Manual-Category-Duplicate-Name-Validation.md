# TC-004 — Verify Duplicate Name Validation for Manually Created Categories

## Related Defect

- None (additional coverage)

## Objective

Verify that a manual category cannot duplicate an existing one.

## Test Type

Negative

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

- A category already exists in the store.

## Test Steps

1. Create a new category manually with the same name.
2. Save.

## Expected Result

- A validation message about the duplicate name is displayed.
- The duplicate is not created.

## Status

Not Executed
