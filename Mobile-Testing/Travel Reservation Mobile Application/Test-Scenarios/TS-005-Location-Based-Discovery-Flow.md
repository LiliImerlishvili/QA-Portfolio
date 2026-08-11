# TS-005 — Location-Based Discovery Flow

## Objective

Verify that the application can detect and display the user’s current location and use it to discover nearby hotels, restaurants, and points of interest.

## Preconditions

- The user is logged in.
- Location services are enabled on the device.
- The application has permission to access the user’s location.
- The device has an active internet connection.

## Scenario

1. Launch the application.
2. Log in with a valid account.
3. Open the map or location-based discovery screen.
4. Wait for the map to load.
5. Verify that the current-location marker is displayed.
6. Verify that the displayed location is reasonably accurate.
7. Search for nearby hotels.
8. Search for nearby restaurants.
9. Search for nearby points of interest.
10. Open one result from each category.
11. Return to the map.
12. Use the current-location control, if available.

## Expected Result

- The map should load successfully.
- The user’s current location should be displayed with a clear marker.
- The displayed location should be reasonably accurate.
- Nearby hotels, restaurants, and points of interest should be shown.
- Search results should be relevant to the user’s location.
- The user should be able to open result details.
- The current-location control should return the map to the user’s position.
- If location retrieval fails, the application should display a clear error message and retry option.

## Related Artifacts

- BR-005 — Current Location Is Not Displayed on the Map
- TC-005 — Verify Current Location Is Displayed on the Map
- CL-001 — Core Flows Checklist

## Priority

High

## Test Type

End-to-End / Functional / Location / Discovery

## Status

Not Executed