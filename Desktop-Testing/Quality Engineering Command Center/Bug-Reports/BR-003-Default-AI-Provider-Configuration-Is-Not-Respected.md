# BR-003 — Default AI Provider Configuration Is Not Respected

## Summary

The scan flow ignores the configured default AI provider and calls another provider instead.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Application Version | 1.0 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- The relevant project and feature are available.

## Steps to Reproduce

1. Ensure a default AI provider is configured.
2. Run a scan without changing the provider.
3. Review the analysis result and provider behavior.

## Actual Result

The system calls another provider instead of the configured default.

## Expected Result

The configured default provider should be used unless the user explicitly changes it.

## User or Business Impact

Environment configuration is not respected and analysis can fail.

## Attachment

Evidence is available in the original defect management system. Sensitive provider names, URLs, endpoints, internal errors, and account data are intentionally omitted.
