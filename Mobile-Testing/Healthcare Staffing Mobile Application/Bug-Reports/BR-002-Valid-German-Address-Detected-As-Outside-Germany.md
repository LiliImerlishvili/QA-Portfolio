# BR-002 — Valid German Address Is Incorrectly Detected as Being Outside Germany

## Type

Bug

## Summary

On the Address step of the registration flow, a valid German address is rejected with a message that the location is outside Germany.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device 1 | HONOR X5c — Android 15, MagicOS 9.0 |
| Device 2 | Pixel 9 Pro XL (Android Emulator) — Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |
| Reproducibility | 100% on both devices |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is registered and logged in.
- The user is on the Address step of the registration flow.
- On the physical Android device, Location Services are turned off.
- On the Android Emulator, the simulated location is set to Berlin, Germany (Latitude `52.520007`, Longitude `13.404954`).

## Steps to Reproduce

1. Open the Address page.
2. Enter the following address:
   - Street: `Müllerstraße`
   - Building number: `45`
   - Postal code: `13351`
   - State: `Berlin`
   - City: `Berlin`
3. Tap the **Confirm** button.
4. Repeat the same scenario on both the physical Android device and the Android Emulator.

## Actual Result

The application incorrectly rejects the entered German address and displays the following validation message:

> "You cannot add a location outside Germany. The company operates only within Germany. Please provide a German address to receive job requests."

The issue is reproducible both on the physical Android device with Location Services turned off and on the Android Emulator with the simulated location set to Berlin, Germany.

## Expected Result

The application should correctly recognize `Müllerstraße 45, 13351 Berlin, Germany` as an address located within Germany and allow the user to save the address and continue the registration process.

## Additional Note

The same valid German address can be saved successfully from **Locations → Add Location**, while it is rejected on the onboarding Address step with the message that the location is outside Germany. This suggests an inconsistency in address validation between the two flows.

## User Impact

Eligible users located in Germany cannot complete onboarding and cannot receive job requests.

## Business Impact

The platform's core market is blocked at onboarding, causing direct loss of new professionals.

## Attachment

Screen recordings from the test devices are available in the original defect management system.
