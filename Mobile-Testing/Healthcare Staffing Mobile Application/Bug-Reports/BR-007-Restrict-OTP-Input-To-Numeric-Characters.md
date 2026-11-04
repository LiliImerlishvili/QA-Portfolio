# BR-007 — [Improvement] Restrict OTP Input to Numeric Characters Only

## Type

Improvement

## Summary

The OTP code sent to the user's email consists only of numeric digits. However, the OTP input field currently allows users to enter letters and special characters.

## Environment

| Field | Value |
|---|---|
| Platform | Android |
| Application Version | 2.0.1 (9010) |

## Severity

Medium

## Priority

High

## Recommended Behavior

- OTP input fields should accept numeric characters only (0–9).
- Letters, spaces, and special characters should not be accepted.
- On mobile devices, the numeric keyboard should be displayed automatically when the OTP field is focused.
- The maximum input length should match the exact OTP code length.
- Pasted values containing unsupported characters should either be rejected or sanitized so that only valid numeric characters remain.

## Expected Benefit

Restricting the input to the actual OTP format will reduce invalid submissions, improve usability, and make the verification flow more consistent.
