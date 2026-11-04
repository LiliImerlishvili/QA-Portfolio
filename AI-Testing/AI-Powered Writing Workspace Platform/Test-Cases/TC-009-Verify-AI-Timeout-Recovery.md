# TC-009 — Verify AI Timeout Recovery

## Related Defect

- BR-009

## Objective

Verify AI timeout, retry, recovery, and partial-result handling.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Test Steps

1. Open a screenplay draft.
2. Open the AI chat.
3. Select an available AI model.
4. Submit a multi-step writing prompt.
5. Wait for the response.

## Expected Result

The request should complete within the expected time or provide retry, recovery, or partial-result handling without losing the generated work.

## Status

Not Executed
