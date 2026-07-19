# TC-005 — Verify Favorites Page Loads Successfully

## Related Defect

- BR-005 — Favorites Page Returns 500 Internal Server Error

## Objective

Verify that authenticated users can open and use the Favorites page without server errors.

## Preconditions

- The user is authenticated.
- At least one item is saved as a favorite.

## Test Steps

1. Open the account menu.
2. Select **Favorites**.
3. Verify the page response.
4. Review saved items.
5. Open one saved item.
6. Remove one item from Favorites.
7. Refresh the page.

## Expected Result

- The Favorites page loads successfully.
- No 500 error is displayed.
- Saved items are visible and accurate.
- Items can be opened and removed.
- Changes persist after refresh.

## Priority

Critical

## Test Type

Functional / API Integration / Regression

## Status

Not Executed
