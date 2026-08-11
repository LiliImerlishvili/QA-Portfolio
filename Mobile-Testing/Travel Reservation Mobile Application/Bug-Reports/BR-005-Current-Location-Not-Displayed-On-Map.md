# BR-005 — Current Location Is Not Displayed on the Map

## Summary

The map does not display the user’s current location even though location permission is enabled for the application.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | iOS |
| Device | iPhone 14 Pro |
| OS Version | iOS 26.4.2 |
| Application Version | 1.0 (4) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is logged in.
- Location services are enabled on the device.
- The application has permission to access the user’s location.

## Steps to Reproduce

1. Launch the application.
2. Log in with a valid account.
3. Open the map or location-based discovery screen.
4. Wait for the map to load.
5. Check whether the current location marker is displayed.

## Actual Result

The map loads, but the user’s current location is not displayed.

No current-location marker, location indicator, or error message is shown.

## Expected Result

The application should display the user’s current location on the map when location permission is granted.

If the location cannot be retrieved, the application should show a clear error message and provide an option to retry.

## User Impact

Users cannot easily identify nearby hotels, restaurants, or points of interest based on their real location.

## Business Impact

The issue reduces the usefulness of location-based discovery and may lead to inaccurate search results, lower engagement, and abandoned bookings.

## Attachment

Evidence available in the original defect management system.