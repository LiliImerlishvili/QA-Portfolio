# TC-009 — Verify Quick Poll Percentages Total 100 Percent

## Related Defect

- BR-009

## Objective

Quick Poll percentages must total 100 percent according to rounding rules.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- At least two Quick Polls with votes exist.

## Test Steps

1. Open the statistics page.
2. Open each Quick Poll result.
3. Add up the displayed percentages.

## Expected Result

- The percentages of each poll total 100 percent.
- Rounding is consistent across polls.

## Status

Not Executed
