# TC-001 — Verify Blog Statistics Show Correct Relative Publication Time

## Related Defect

- BR-001

## Objective

Each blog post must show a relative time based on its actual publication date.

## Test Type

Positive

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

- At least three blog posts with different publication dates exist.

## Test Steps

1. Open the blog statistics page.
2. Compare the relative time labels of posts with different publication dates.

## Expected Result

- Each post shows a relative time calculated from its own publication date.
- Posts published on different dates do not show the same label.

## Status

Not Executed
