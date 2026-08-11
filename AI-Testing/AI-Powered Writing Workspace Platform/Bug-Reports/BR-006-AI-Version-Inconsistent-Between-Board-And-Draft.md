# BR-006 — AI Version Is Inconsistent Between Board and Draft Modes

## Summary

The available AI version differs between Board and Draft modes.

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

Urgent

## Preconditions

- The user is authenticated.
- The relevant project or draft exists.
- The required feature is available.

## Steps to Reproduce

1. Open an existing project.
2. Open the Draft mode AI controls.
3. Record the available AI versions.
4. Open Board mode.
5. Compare the available AI versions.

## Actual Result

Board mode exposes a different or incomplete AI version set compared with Draft mode.

## Expected Result

The same supported AI versions and capabilities should be available consistently across both modes.

## User or Business Impact

Users receive inconsistent behavior and cannot rely on the same AI features across workspaces.

## Attachment

Evidence is available in the original defect management system. Sensitive links, project names, account details, and provider information are intentionally omitted.
