# BR-007 — Desktop Cell Size Does Not Scale Dependent Elements Proportionally

## Summary

Changing the desktop cell size does not proportionally scale dependent elements such as discount labels, running line, counters, countdown, and company name.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Desktop Web |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- Grid settings are available.
- A cube contains promotional labels and counters.

## Steps to Reproduce

1. Open grid settings.
2. Increase the desktop cell size.
3. Observe related elements.
4. Decrease the desktop cell size.
5. Compare proportions.

## Actual Result

Dependent elements keep fixed dimensions or scale inconsistently.

## Expected Result

All dependent elements should scale proportionally based on the desktop cell size.

## User Impact

Layouts can become crowded, oversized, or visually inconsistent.

## Attachment

Evidence available in the original QA materials.
