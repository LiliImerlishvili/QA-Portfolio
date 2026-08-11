# BR-004 — Countdown and Counter Elements Are Misaligned on Mobile and Tablet

## Summary

The countdown and top-right counter group do not share the same visual baseline on mobile and tablet.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Responsive Web |
| Devices | Mobile and Tablet |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Normal

## Preconditions

- Countdown is enabled.
- Download and view counters are visible.

## Steps to Reproduce

1. Open a cube containing countdown and counters.
2. Switch to mobile preview.
3. Compare the vertical alignment.
4. Repeat on tablet preview.

## Actual Result

The countdown appears lower or higher than the counter group.

## Expected Result

Countdown and counters should share a consistent axis and visual baseline.

## User Impact

The banner layout appears unbalanced and less professional.

## Attachment

Evidence available in the original QA materials.
