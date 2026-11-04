# TC-010 — Verify Long Article Title Does Not Break the Layout

## Related Defect

- BR-010

## Objective

Long article titles must wrap or truncate without breaking the layout.

## Test Type

Boundary

## Priority

Medium

## Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## Preconditions

- The user has permission to create articles.

## Test Steps

1. Open article creation.
2. Enter a title at the maximum allowed length.
3. Save or preview the article.

## Expected Result

- The title wraps or truncates within the available space.
- The surrounding layout is not broken.

## Status

Not Executed
