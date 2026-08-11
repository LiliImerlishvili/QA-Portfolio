# BR-001 — Running Line Animation Speed Does Not Work on Mobile

## Summary

Changing the running line animation speed in the editor does not affect the animation speed on mobile devices.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Responsive Web |
| Device | Mobile |
| Browser | Mobile browser |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- A campaign cube with an enabled running line exists.
- Mobile running line speed controls are available.

## Steps to Reproduce

1. Open the campaign editor.
2. Select a cube with a running line.
3. Set a low mobile speed.
4. Save and open the mobile preview.
5. Set a high mobile speed.
6. Save and compare the animation.

## Actual Result

The running line animation speed remains unchanged on mobile.

## Expected Result

The mobile animation speed should reflect the configured mobile value independently of tablet and desktop settings.

## User Impact

Campaign owners cannot control readability and pacing on mobile devices.

## Business Impact

Unreadable or overly fast promotional text may reduce engagement and conversion.

## Attachment

Evidence available in the original QA materials.
