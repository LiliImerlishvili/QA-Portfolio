# TC-005 — Verify Current Location Is Displayed on the Map

## Related Defect

- BR-005 — Current Location Is Not Displayed on the Map

## Objective

Verify that the application displays the user’s current location on the map when location services and permissions are enabled.

## Preconditions

- The user is logged in.
- Location services are enabled on the device.
- The application has permission to access the user’s location.
- The device has an active internet connection.

## Test Steps

1. Launch the application.
2. Log in with a valid account.
3. Open the map or location-based discovery screen.
4. Wait for the map to load.
5. Verify that the current-location marker is displayed.
6. Compare the displayed location with the device’s actual location.
7. Move the map and use the current-location control, if available.

## Expected Result

- The map should load successfully.
- The user’s current location should be displayed with a clear marker.
- The displayed location should be reasonably accurate.
- The current-location control should return the map to the user’s position.
- If location retrieval fails, the application should display a clear error message and retry option.

## Priority

High

## Test Type

Functional / Location / Map

## Status

Not Executed