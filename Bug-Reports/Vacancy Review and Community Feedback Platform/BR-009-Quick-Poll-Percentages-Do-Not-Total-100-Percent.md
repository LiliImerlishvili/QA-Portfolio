# BR-009 — Quick Poll Percentages Do Not Total 100 Percent

## Summary

Displayed Quick Poll answer percentages do not add up to 100 percent.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Open the statistics page.
2. Open two or more Quick Poll results.
3. Add the displayed percentages.

## Actual Result

The percentages do not total 100 percent.

## Expected Result

Displayed percentages should total 100 percent, allowing for defined rounding rules.

## User or Business Impact

Poll analytics appear unreliable.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
