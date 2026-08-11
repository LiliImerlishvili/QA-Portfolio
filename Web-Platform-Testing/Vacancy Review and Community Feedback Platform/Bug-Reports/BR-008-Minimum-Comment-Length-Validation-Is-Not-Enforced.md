# BR-008 — Minimum Comment Length Validation Is Not Enforced

## Summary

The comment form accepts content shorter than the configured minimum length.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user has access to the relevant flow.
- The required platform data is available.

## Steps to Reproduce

1. Open a vacancy.
2. Enter a comment shorter than the minimum requirement.
3. Submit the comment.

## Actual Result

The comment is accepted.

## Expected Result

Submission should be blocked with a clear validation message.

## User or Business Impact

Low-quality or invalid comments can be published.

## Attachment

Evidence is available in the original defect management system. Sensitive information is intentionally omitted.
