# TC-001 — Verify Conversation Language Consistency

## Related Defect

- BR-001

## Objective

Verify that all AI responses remain in the user's selected conversation language.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS 26.5.1 |
| Browser | Google Chrome 150 |
| Reproducibility | 100% |

## Preconditions

- The AI chat is available.
- Relevant website or catalog data exists.
- The user has access to the customer-facing platform.

## Test Steps

1. Open the AI chat.
2. Start and continue the conversation in Georgian.
3. Ask a detailed question that the assistant cannot fully answer.
4. Observe the operator-transfer suggestion.

## Expected Result

The response language should remain Georgian throughout the conversation, including escalation messages.

## Status

Not Executed
