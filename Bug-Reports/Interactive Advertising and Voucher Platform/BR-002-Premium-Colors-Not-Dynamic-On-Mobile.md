# BR-002 — Premium Label Colors Are Not Applied Dynamically on Mobile

## Summary

The selected premium badge color is not consistently applied to all related promotional elements on mobile.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Responsive Web |
| Device | Mobile |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- A premium cube exists.
- A premium color option is selected in the editor.

## Steps to Reproduce

1. Open the cube editor.
2. Select a premium color.
3. Save the cube.
4. Open the mobile preview.
5. Compare the badge, running line, countdown, and counters.

## Actual Result

Some promotional elements keep default or inconsistent colors instead of the selected premium color.

## Expected Result

The selected premium color should be the single source of truth and should be applied consistently to all related elements.

## User Impact

The mobile presentation appears visually inconsistent.

## Business Impact

Inconsistent campaign branding reduces visual quality and advertiser trust.

## Attachment

Evidence available in the original QA materials.
