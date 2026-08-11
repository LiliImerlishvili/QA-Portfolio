# BR-011 — Long Vacancy Title Is Truncated and Has No Full-Text Hover State

## Summary

A long vacancy title is not fully visible in the vacancy list and hovering does not reveal the complete text.

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

1. Open the vacancy list.
2. Locate a vacancy with a long title.
3. Hover over the truncated title.

## Actual Result

The title remains truncated and no tooltip or alternate full-text display appears.

## Expected Result

The full title should be visible through wrapping, a tooltip, or another accessible presentation method.

## User or Business Impact

Users cannot read the full vacancy title before opening the vacancy.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
