# BR-006 — Links Field Accepts Invalid Formats Without Validation

## Summary

The profile links field accepts malformed values without validation.

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

Normal

## Preconditions

- The user has access to the relevant flow.
- The required feature is available.

## Steps to Reproduce

1. Open profile editing.
2. Navigate to the Links section.
3. Enter malformed or unsupported link values.
4. Save the changes.

## Actual Result

Invalid values are accepted and no validation feedback is shown.

## Expected Result

The field should validate supported URL formats and display a clear error message for invalid input.

## User or Business Impact

Invalid links may be stored and displayed on user profiles.

## Attachment

Evidence is available in the original defect management system. Sensitive links, user data, media, internal identifiers, and employee details are intentionally omitted.
