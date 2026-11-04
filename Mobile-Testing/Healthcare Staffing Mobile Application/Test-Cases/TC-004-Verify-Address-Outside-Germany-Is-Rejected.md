# TC-004 — Verify Address Outside Germany Is Rejected With a Clear Message

## Related Defect

- None (additional coverage)

## Objective

Verify that an address outside the supported region is rejected with the correct validation message.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Devices | HONOR X5c (Android 15, MagicOS 9.0); Pixel 9 Pro XL Emulator (Android 16.0) |
| Application Version | 2.0.1 (9010) |

## Preconditions

- The user is on the Address step of the registration flow.

## Test Steps

1. Enter a valid address outside Germany (e.g., in Austria).
2. Tap **Confirm**.

## Expected Result

- The address is rejected.
- The message explains that only German addresses are supported.

## Status

Not Executed
