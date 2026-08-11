# BR-004 — Ratings Filter Allows Multiple Values to Remain Selected

## Summary

The ratings filter allows multiple rating values to remain selected even when the filter is intended to use a single-choice selection.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Browser | Google Chrome |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- The ratings filter is available.
- Search or listing results are displayed.

## Steps to Reproduce

1. Open the listings page.
2. Open the ratings filter.
3. Select one rating value, for example 5 stars.
4. Select another rating value, for example 4 stars.
5. Review the selected state and search results.

## Actual Result

Both rating values remain selected simultaneously, and the resulting filter behavior is unclear.

## Expected Result

If the filter is single-choice, selecting a new rating should automatically clear the previous selection.

If multiple selection is supported, the UI and result logic should clearly communicate that behavior.

## User Impact

Users may not understand which rating criteria are applied to the results.

## Business Impact

Ambiguous filtering can reduce search relevance and user confidence.

## Attachment

Evidence available in the original defect management system.
