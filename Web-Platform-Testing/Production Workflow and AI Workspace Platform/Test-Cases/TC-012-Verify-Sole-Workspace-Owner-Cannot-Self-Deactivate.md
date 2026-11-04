# TC-012 — Verify Sole Workspace Owner Cannot Self-Deactivate

## Related Defect

- BR-005

## Objective

Verify the restriction for sole workspace owners.

## Test Type

Negative

## Priority

High

## Environment

| Field | Value |
|---|---|
| Environment | Test |
| Platform | Web |
| Device | iMac (M1, 2021) |
| Operating System | macOS Tahoe 26.5.2 |
| Browser | Google Chrome 153.0.8010.48 (Official Build, arm64) |

## Preconditions

- The user is the only Owner of a workspace.

## Test Steps

1. Try to submit a deactivation request.

## Expected Result

- The request is blocked with a clear explanation.

## Status

Not Executed
