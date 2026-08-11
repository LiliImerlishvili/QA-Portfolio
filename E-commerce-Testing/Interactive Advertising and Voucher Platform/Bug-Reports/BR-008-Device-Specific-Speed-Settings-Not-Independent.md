# BR-008 — Device-Specific Running Line Speed Settings Are Not Applied Independently

## Summary

Running line speed settings configured for mobile, tablet, and desktop are not applied independently.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Responsive Web |
| Devices | Mobile, Tablet, Desktop |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- Separate speed controls are available for all device types.

## Steps to Reproduce

1. Set a different speed for mobile, tablet, and desktop.
2. Save the campaign.
3. Open each device preview.
4. Compare animation behavior.

## Actual Result

One value affects multiple devices or some device-specific values are ignored.

## Expected Result

Each device should use only its own configured speed value.

## User Impact

Campaign owners cannot optimize readability per device.

## Attachment

Evidence available in the original QA materials.
