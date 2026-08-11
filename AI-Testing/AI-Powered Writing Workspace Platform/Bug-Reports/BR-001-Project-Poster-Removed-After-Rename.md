# BR-001 — Project Poster Is Removed After Renaming a Project

## Summary

Renaming a project from the Library page removes the existing project poster.

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

Normal

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open the Library page.
2. Select a project that already has a poster.
3. Choose Rename.
4. Change the project name.
5. Save the change.

## Actual Result

The project name is updated, but the poster is removed.

## Expected Result

Renaming should update only the project name and preserve the existing poster.

## User or Business Impact

Users lose project customization and may need to restore the poster manually.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
