# TC-011 — Verify Full Vacancy Title Is Accessible When Truncated

## Related Defect

- BR-011

## Objective

Truncated vacancy titles must be readable in full.

## Test Type

UI

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- A vacancy with a long title exists in the list.

## Test Steps

1. Open the vacancy list.
2. Locate the vacancy with a long title.
3. Hover over the truncated title.

## Expected Result

- The full title is available through a tooltip, wrapping or another accessible method.

## Status

Not Executed
