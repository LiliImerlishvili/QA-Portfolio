# TC-004 — Verify Ratings Filter Selection Behavior

## Related Defect

- BR-004 — Ratings Filter Allows Multiple Values to Remain Selected

## Objective

Verify that rating filter selection matches the intended single-select or multi-select behavior.

## Preconditions

- Listings are available.
- The ratings filter is visible.

## Test Steps

1. Open the ratings filter.
2. Select one rating value.
3. Select a second rating value.
4. Review the selection state.
5. Apply the filter.
6. Review the results.
7. Clear the filter.

## Expected Result

- If single-select is intended, the previous value is cleared automatically.
- If multi-select is intended, the UI clearly displays all active selections.
- Results match the selected rating criteria.
- Clearing the filter restores the full result set.

## Priority

Medium

## Test Type

Functional / Filtering / UI

## Status

Not Executed
