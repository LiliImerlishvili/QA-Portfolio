# BR — Guest Mode Limits Practice Text to 15 Characters

## Summary

In Guest mode, only the first 15 characters of the selected practice text are available.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iPhone 14 Pro |
| Operating System | iOS 26.4.1 |
| Application Version | 2.0.0 (1.1.12) |
| Reproducibility | 100% |

## Severity

High

## Priority

Normal

## Preconditions

- The user is not registered.
- The application supports Continue as Guest.

## Steps to Reproduce

1. Open the application.
2. Tap Continue as Guest.
3. Open a typing practice text.
4. Review the amount of available text.

## Actual Result

Guest mode displays only 15 characters, even when the selected exercise contains significantly more text.

## Expected Result

Guest mode should provide the full allowed practice sample or clearly communicate any intentional limitation before the user starts.

## User Impact

Guest users cannot properly evaluate the typing experience and may receive misleading practice results.

## Attachment

Evidence available in the original defect management system.
