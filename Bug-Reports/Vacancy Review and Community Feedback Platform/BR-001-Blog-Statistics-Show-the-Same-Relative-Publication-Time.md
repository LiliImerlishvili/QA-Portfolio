# BR-001 — Blog Statistics Show the Same Relative Publication Time

## Summary

Different blog posts display the same relative publication time even though they were published on different dates.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Open the blog statistics page.
2. Compare several posts with different publication dates.
3. Review the displayed relative time labels.

## Actual Result

Multiple posts display the same relative publication time.

## Expected Result

Each post should show a relative time calculated from its actual publication date.

## User or Business Impact

Users receive misleading publication timing information.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
