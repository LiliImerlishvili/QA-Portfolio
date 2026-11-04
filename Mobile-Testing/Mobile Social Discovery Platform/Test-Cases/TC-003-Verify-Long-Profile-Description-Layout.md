# TC-003 — Verify Long Profile Description Layout

## Related Defect

- BR-003

## Objective

Verify that long multi-line profile descriptions remain fully readable and editable.

## Test Type

UI

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Production |
| Platform | iOS |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.5 |
| Application Version | 2.0.0 (build 2003) |

## Preconditions

- The user is logged in.

## Test Steps

1. Open the profile screen and enter edit mode.
2. Open the profile description field.
3. Enter a long multi-line description.
4. Scroll through the text.

## Expected Result

- The toolbar does not overlap the text.
- The field scrolls or resizes so all content remains readable and editable.

## Status

Not Executed
