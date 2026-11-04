# TC-004 — Verify Script Input Sanitization

## Related Defect

- BR-004

## Objective

Verify HTML and JavaScript input is sanitized and cannot execute.

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac |
| Operating System | macOS Tahoe 26.3.1 |
| Browser | Google Chrome 146 |
| Reproducibility | 100% |

## Preconditions

- The user is logged in.

## Test Steps

1. Open a user or partner form.
2. Enter script markup in a text field.
3. Save the form.
4. Open the saved record.
5. Inspect the page source or DOM.

## Expected Result

Input should be sanitized and encoded so executable markup cannot be stored or rendered.

## Status

Not Executed
