# BR-009 — AI Request Times Out and Generated Content Is Lost

## Summary

A long-running AI request times out, and no partial or recoverable result is preserved.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

High

## Priority

High

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open a screenplay draft.
2. Open the AI chat.
3. Select an available AI model.
4. Submit a multi-step writing prompt.
5. Wait for the response.

## Actual Result

The request remains in a thinking state, then times out and returns a generic connection error. No content is preserved.

## Expected Result

The request should complete within the expected time or provide retry, recovery, or partial-result handling without losing the generated work.

## User or Business Impact

Users lose time and generated content during critical writing tasks.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
