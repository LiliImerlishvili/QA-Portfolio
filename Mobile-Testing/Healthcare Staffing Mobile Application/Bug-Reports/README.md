# Healthcare Staffing Mobile Application — Bug Reports

This folder contains NDA-safe bug reports and improvement suggestions based on real QA findings from an Android healthcare staffing application connecting qualified healthcare professionals with elderly care facilities.

## Bug Report Index

| ID | Title | Type | Area | Severity | Priority |
|---|---|---|---|---|---|
| [BR-001](BR-001-Registration-Blocked-By-Server-Error-On-Minijob-Form.md) | Registration Cannot Be Completed Due to proc_open() Error on Minijob Form | Bug | Registration / Minijob form | Critical | Urgent |
| [BR-002](BR-002-Valid-German-Address-Detected-As-Outside-Germany.md) | Valid German Address Is Incorrectly Detected as Being Outside Germany | Bug | Onboarding / address validation | Critical | Urgent |
| [BR-003](BR-003-User-Can-Proceed-Without-Uploading-Required-Document.md) | User Can Proceed Without Uploading a Required Document | Bug | Required documents | High | High |
| [BR-004](BR-004-Keyboard-Does-Not-Dismiss-And-Blocks-Navigation.md) | Keyboard Does Not Dismiss After Text Input and Blocks Navigation | Bug | Forms / keyboard behavior | High | High |
| [BR-005](BR-005-Loading-Skeleton-Does-Not-Cover-Notification-Content.md) | Loading Skeleton Does Not Fully Cover Notification Content While Loading | Bug | Notifications / UI | Medium | High |
| [BR-006](BR-006-Bio-Character-Limit-Shows-Generic-Error.md) | Bio Character Limit Validation Displays a Generic Error Message Instead of a Specific Limit Message | Bug | Profile / form validation | Low | Normal |
| [BR-007](BR-007-Restrict-OTP-Input-To-Numeric-Characters.md) | Restrict OTP Input to Numeric Characters Only | Improvement | Authentication / OTP input | Medium | High |
| [BR-008](BR-008-Limit-OTP-Attempts-And-Introduce-Temporary-Lockout.md) | Limit OTP Verification Attempts and Introduce Temporary Lockout | Improvement | Authentication / OTP security | High | High |

## Covered Areas

- Registration and multi-step onboarding forms
- Address validation for the supported service region
- Required document upload
- Profile completion and field validation
- Keyboard behavior in forms
- Notifications and loading states
- OTP input and verification security

## Test Environments

| Device | Operating System | Application Version |
|---|---|---|
| HONOR X5c (physical device) | Android 15, MagicOS 9.0 | 2.0.1 (9010) |
| Pixel 9 Pro XL (Android Emulator) | Android 16.0 (Baklava) | 2.0.1 (9010) |

## Confidentiality Note

The original application name, URLs, user data, internal identifiers, evidence links and proprietary details have been excluded to comply with NDA requirements.
