# TS-003 — Cart, Favorites, and Filtering Regression

## Objective

Verify that cart calculations, favorites, and ratings filtering work consistently across navigation and refresh.

## Scenario

1. Add an item to the cart.
2. Change its quantity.
3. Verify total calculations.
4. Save an item to Favorites.
5. Open the Favorites page.
6. Apply ratings filters.
7. Navigate between pages.
8. Refresh and verify persisted state.

## Expected Result

- Cart calculations remain accurate.
- Favorites load without server errors.
- Filter state is clear and results are correct.
- Data remains synchronized after navigation and refresh.

## Related Artifacts

- BR-003
- BR-004
- BR-005
- TC-003
- TC-004
- TC-005
- CL-001

## Priority

Critical

## Status

Not Executed
