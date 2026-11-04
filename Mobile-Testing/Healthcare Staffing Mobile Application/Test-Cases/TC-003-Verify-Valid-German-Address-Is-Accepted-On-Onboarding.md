# TC-003 — Verify Valid German Address Is Accepted on the Onboarding Address Step

## Related Defect

- BR-002

## Objective

Verify that a valid address in Germany is accepted on the onboarding Address step regardless of device location settings.

## Test Type

Positive

## Priority

Critical

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Devices | HONOR X5c (Android 15, MagicOS 9.0); Pixel 9 Pro XL Emulator (Android 16.0) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on the Address step of the registration flow.
- Location Services are off (physical device) or the simulated location is Berlin (emulator).

## Test Steps

1. Enter Street `Müllerstraße`, Building number `45`, Postal code `13351`, State `Berlin`, City `Berlin`.
2. Tap **Confirm**.
3. Repeat on both devices.

## Expected Result

- The address is accepted as located in Germany.
- The address is saved.
- The user continues the registration flow.

## Status

Not Executed
