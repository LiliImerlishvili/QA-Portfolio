# TC-005 — Verify Address Validation Is Consistent Between Onboarding and Add Location

## Related Defect

- BR-002

## Objective

Verify that the same address produces the same validation result in onboarding and in Locations → Add Location.

## Test Type

Positive

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Device | Pixel 9 Pro XL (Android Emulator) |
| Operating System | Android 16.0 (Baklava) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is logged in.

## Test Steps

1. Save `Müllerstraße 45, 13351 Berlin` from **Locations → Add Location**.
2. Enter the same address on the onboarding Address step.

## Expected Result

- The address is accepted in both flows.

## Status

Not Executed
