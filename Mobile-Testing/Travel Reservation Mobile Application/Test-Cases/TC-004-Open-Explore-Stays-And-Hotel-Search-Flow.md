# TC-004 — Verify Explore Stays Opens the Hotel Search Flow

## Related Defect

- BR-004 — Explore Stays Section Is Unresponsive

## Objective

Verify that tapping **Explore Stays** opens the hotel search and reservation flow successfully.

## Preconditions

- The user is logged in.
- The application home screen is displayed.
- The **Explore Stays** section is visible.
- The device has an active internet connection.

## Test Steps

1. Launch the application.
2. Log in with a valid account.
3. Navigate to the home screen.
4. Tap **Explore Stays**.
5. Observe the application response.
6. Verify that the hotel discovery screen loads.
7. Verify that search, filtering, and hotel selection options are available.

## Expected Result

- Tapping **Explore Stays** should trigger an immediate response.
- The hotel search or discovery screen should open successfully.
- A loading indicator should be displayed if content takes time to load.
- Search, filtering, availability, and hotel details should be accessible.
- If loading fails, the application should display a clear error message and a retry option.

## Priority

Critical

## Test Type

Functional / Navigation / Smoke

## Status

Not Executed