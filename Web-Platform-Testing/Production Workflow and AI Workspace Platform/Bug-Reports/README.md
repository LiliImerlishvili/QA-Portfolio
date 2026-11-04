# Production Workflow and AI Workspace Platform — Bug Reports

This folder contains NDA-safe bug reports and recommendations based on real QA findings from a B2B web platform that centralizes project operations, team collaboration, production workflows, financial processes and AI-assisted functionality.

## Bug Report Index

| ID | Title | Type | Area | Severity | Priority | Status |
|---|---|---|---|---|---|---|
| [BR-001](BR-001-Registration-Fails-After-Continue-But-Welcome-Email-Is-Sent.md) | Registration Cannot Be Completed After Clicking Continue, but a Welcome Email Is Still Sent | Bug | Authentication / registration | High | High | Fixed |
| [BR-002](BR-002-Open-Portal-Button-Returns-Authorization-Error.md) | Authorization Error When Clicking the Open Portal Button | Bug | Authentication / environment configuration | Critical | High | Blocked |
| [BR-003](BR-003-Financial-Overview-Shows-Unpaid-Despite-Paid-Invoice.md) | Payment Status in Financial Overview Remains Unpaid Despite a Paid Invoice | Bug | Finance / Financial Overview | Critical | Urgent | Fixed |
| [BR-004](BR-004-Overdue-Invoice-Not-Reflected-In-Summary-And-Reports.md) | Overdue Invoice Is Not Reflected in the Overdue Summary and Reports | Bug | Finance / invoices and reports | High | High | Fixed |
| [BR-005](BR-005-Send-Email-Notification-On-Profile-Deactivation-Request.md) | Send an Email Notification When a Profile Deactivation Is Requested | Improvement | Account security / deactivation | Critical | High | Implemented |
| [BR-006](BR-006-Add-Bid-Package-Vs-Budget-Comparison.md) | Bid Package vs Budget Comparison | Improvement | Finance / bidding and budgets | High | Normal | Parked |

## Covered Areas

- Registration and sign-in identity conflicts
- Environment-specific authentication configuration
- Financial Overview and invoice payment status
- Invoice summaries and Reports aggregation
- Account deactivation and security notifications
- Bidding and budget comparison

## Defect Lifecycle

Each report includes a **Status** and **Resolution Notes / Retest History** section that reflects the real lifecycle: reported → root cause provided by development → fixed or parked → retested by QA.

## Test Environments

| Environment | Device | Operating System | Browser |
|---|---|---|---|
| Test | iMac (M1, 2021) | macOS Tahoe 26.5.2 | Google Chrome 152 / Brave 1.93 (Chromium 151) |
| Production | iMac (M1, 2021) | macOS Tahoe 26.5.2 | Google Chrome 153 |

## Confidentiality Note

The original product name, domains, workspace and project names, team member names, commit references, evidence links and proprietary details have been excluded to comply with NDA requirements.
