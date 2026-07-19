# BR-003 — AI Cannot Extract Text From an Uploaded PDF Into the Draft

## Summary

The AI assistant cannot extract text from an uploaded PDF and add it to the current draft.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.4.1 |
| Browser | Google Chrome 147 |
| Reproducibility | 100% |

## Severity

Critical

## Priority

Urgent

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open an existing draft.
2. Open the AI chat.
3. Upload a PDF file.
4. Ask the AI to add the PDF text to the current draft.
5. Submit the request.

## Actual Result

No text is extracted and nothing is added to the draft.

## Expected Result

The system should extract the PDF text and append it to the current draft.

## User or Business Impact

A core document-import and AI-assistance workflow is blocked.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
