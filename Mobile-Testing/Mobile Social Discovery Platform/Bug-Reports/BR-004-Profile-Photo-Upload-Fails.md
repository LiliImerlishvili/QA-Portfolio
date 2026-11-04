# BR-004 — Profile Photo Upload Does Not Complete Successfully

## Summary

Updating the profile photo does not complete successfully in some cases.

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is logged in.
- A valid image exists in the device gallery.

## Steps to Reproduce

1. Open the profile screen.
2. Choose Change Photo.
3. Select a valid image.
4. Confirm the upload.
5. Observe the profile image.

## Actual Result

The new photo is not applied or the upload process does not complete.

## Expected Result

The selected image should upload successfully and appear on the profile.

## User or Business Impact

Users cannot update a key part of their profile.

## Attachment

Evidence is available in the original defect management system. Sensitive links, user data, media, internal identifiers, and employee details are intentionally omitted.
