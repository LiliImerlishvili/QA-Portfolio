# TS-001 — End-to-End Hotel Reservation Flow

## Objective

Verify that a user can successfully search for a hotel, review availability and pricing, complete a reservation, and receive a booking confirmation.

## Preconditions

- The user is registered and logged in.
- The device has an active internet connection.
- Hotel search and reservation services are available.
- Test payment data is available, if payment is required.

## Scenario

1. Launch the application.
2. Log in with a valid account.
3. Tap **Explore Stays**.
4. Enter a destination.
5. Select check-in and check-out dates.
6. Select the number of guests.
7. Start the search.
8. Apply one or more filters.
9. Open a hotel from the search results.
10. Review hotel details, pricing, and availability.
11. Select an available room.
12. Continue to the booking flow.
13. Review the reservation summary.
14. Confirm the booking.
15. Verify the booking confirmation screen.

## Expected Result

- The hotel search flow opens successfully.
- Search results match the selected destination and dates.
- Filters update the results correctly.
- Availability and pricing are displayed accurately.
- The selected room remains available during checkout.
- The reservation summary contains correct hotel, date, guest, room, and price details.
- The booking is completed successfully.
- A unique booking confirmation is displayed.
- The reservation appears in the user’s booking history.

## Related Artifacts

- BR-004 — Explore Stays Section Is Unresponsive
- TC-004 — Verify Explore Stays Opens the Hotel Search Flow
- CL-001 — Core Flows Checklist

## Priority

Critical

## Test Type

End-to-End / Functional / Regression

## Status

Not Executed