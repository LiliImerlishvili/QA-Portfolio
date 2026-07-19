# BR-001 — AI Chat Switches to English During a Georgian Conversation

## Summary

During a Georgian-language conversation, the AI assistant suggests connecting to a human operator in English.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS 26.5.1 |
| Browser | Google Chrome 150 |
| Reproducibility | 100% |

## Severity

Medium

## Priority

Medium

## Preconditions

- The AI chat is available.
- Relevant website or catalog data exists.
- The user has access to the customer-facing platform.

## Steps to Reproduce

1. Open the AI chat.
2. Start and continue the conversation in Georgian.
3. Ask a detailed question that the assistant cannot fully answer.
4. Observe the operator-transfer suggestion.

## Actual Result

The assistant returns the transfer suggestion in English.

## Expected Result

The response language should remain Georgian throughout the conversation, including escalation messages.

## User or Business Impact

The language switch creates inconsistency and may confuse users.

## Attachment

Evidence is available in the original defect management system. Sensitive links, names, and identifiers are intentionally omitted.
