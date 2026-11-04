# BR-002 — Registration Cannot Be Completed Due to an exceed_egress_quota Error

## Summary

Email registration from the seller onboarding flow fails with a backend service-restriction error and no account is created.

## Environment

| Field | Value |
|---|---|
| Platform | Web |
| Device | iMac |
| Operating System | macOS Tahoe 26.5.2 (25F84) |
| Browser | Google Chrome 153.0.8010.53 (Official Build, arm64) |
| Reproducibility | 100% |

## Severity

Critical

## Priority

High

## Status

In Dev Review

## Preconditions

- The user is not registered.
- The user has a valid email address.

## Steps to Reproduce

1. Open the marketplace website.
2. Click the **Generate Store** button.
3. Click the **Sell on Marketplace** button.
4. Enter a valid email.
5. Click the **Continue with email** button.
6. Enter a password.
7. Confirm the password.
8. Click the **Create Account ID** button.

## Actual Result

After the registration request is submitted, the system returns the following error:

```
Service for this project is restricted due to the following violations: exceed_egress_quota. The project owner must upgrade their plan or remove spend caps to restore service.
```

The user's account is not created.

## Expected Result

The user should be able to register and create an account successfully.

This is clearly a backend / infrastructure issue and not a validation issue.

## User Impact

New sellers cannot create an account, so the store-creation funnel is fully blocked.

## Business Impact

No new merchants can join the marketplace while the backend service is restricted; the raw infrastructure error also exposes internal service details to users.

## Attachment

Session recording with console logs and network requests (BetterBugs) is available in the original defect management system.
