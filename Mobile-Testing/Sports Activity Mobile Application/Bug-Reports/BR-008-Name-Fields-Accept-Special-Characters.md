# BR-008 — First and Last Name Fields Accept Special Characters

## Summary

Profile name fields accept and save invalid special characters.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.2 |
| Application Version | 1.0 (build 7) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated unless otherwise stated.
- The relevant feature is available.

## Steps to Reproduce

1. Open Edit Profile.
2. Enter special characters in First Name and Last Name.
3. Save the profile.

## Actual Result

The invalid values are saved.

## Expected Result

The fields should allow only valid name characters and show clear validation.

## User Impact

Invalid profile data can be stored.

## Attachment

Evidence available in the original defect management system.
