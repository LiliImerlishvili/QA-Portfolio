# BR — Incorrect Score Does Not Reflect Mistyped Characters

## Summary

The Incorrect result does not match the number of symbols typed incorrectly.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- A typing exercise is available.

## Steps to Reproduce

1. Open a typing exercise.
2. Intentionally type several wrong characters.
3. Complete or stop the exercise.
4. Review the Incorrect result.

## Actual Result

The Incorrect counter displays 0 or another inaccurate value despite visible typing errors.

## Expected Result

The Incorrect result should exactly match the number of mistyped characters according to the application's scoring rules.

## User Impact

Accuracy metrics become unreliable, undermining the core purpose of the application.

## Attachment

Evidence available in the original defect management system.
