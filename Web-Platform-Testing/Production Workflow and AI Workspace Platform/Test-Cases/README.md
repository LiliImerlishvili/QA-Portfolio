# Production Workflow and AI Workspace Platform — Test Cases

| ID | Title | Type | Related Defect | Priority |
|---|---|---|---|---|
| [TC-001](TC-001-Verify-Sign-Up-With-Email-Linked-To-Another-Identity.md) | Verify Sign-Up With an Email Already Linked to Another Sign-In Identity | Negative | BR-001 | High |
| [TC-002](TC-002-Verify-Successful-Email-Password-Sign-Up.md) | Verify Successful Sign-Up With a New Email and Password | Positive | — | High |
| [TC-003](TC-003-Verify-Open-Portal-Opens-Authorization-Page.md) | Verify Open Portal Opens the Authorization Page for the Current Environment | Positive | BR-002 | Critical |
| [TC-004](TC-004-Verify-Payment-Status-Paid-When-All-Invoices-Paid.md) | Verify Payment Status Is Paid When All Project Invoices Are Paid | Positive | BR-003 | Critical |
| [TC-005](TC-005-Verify-Payment-Status-Partly-Paid.md) | Verify Payment Status When Only Some Invoices Are Paid | Positive | BR-003 | High |
| [TC-006](TC-006-Verify-Payment-Status-Without-Invoices-Keeps-Manual-Value.md) | Verify Project Without Invoices Keeps the Manually Set Payment Status | Edge case | BR-003 | Medium |
| [TC-007](TC-007-Verify-Overdue-Card-Counts-Overdue-Invoices.md) | Verify Overdue Summary Card Counts Overdue Invoices | Positive | BR-004 | High |
| [TC-008](TC-008-Verify-Sent-Invoice-Past-Due-Date-Counts-As-Overdue.md) | Verify Sent Invoice Past Its Due Date Is Counted as Overdue | Positive | BR-004 | High |
| [TC-009](TC-009-Verify-Overdue-Amount-In-Reports-And-Dashboard.md) | Verify Overdue Amount Is Reflected in Reports and Dashboard | Positive | BR-004 | High |
| [TC-010](TC-010-Verify-Deactivation-Request-Sends-Confirmation-Email.md) | Verify Deactivation Request Sends a Confirmation Email | Positive | BR-005 | Critical |
| [TC-011](TC-011-Verify-Deactivation-Request-Can-Be-Cancelled.md) | Verify Scheduled Deactivation Can Be Cancelled | Positive | BR-005 | High |
| [TC-012](TC-012-Verify-Sole-Workspace-Owner-Cannot-Self-Deactivate.md) | Verify Sole Workspace Owner Cannot Self-Deactivate | Negative | BR-005 | High |
| [TC-013](TC-013-Verify-Bid-And-Budget-Totals-Visibility.md) | Verify Bid Total and Budget Total Are Visible for Comparison | Exploratory | BR-006 | Medium |
| [TC-014](TC-014-Verify-Member-Role-Financial-Data-Visibility.md) | Verify Member Role Sees Only Permitted Financial Data | Permission | — | High |
| [TC-015](TC-015-Verify-Financial-Data-Persists-After-Refresh-And-Relogin.md) | Verify Financial Data Persists After Refresh and Re-Login | Positive | — | Medium |
| [TC-016](TC-016-Verify-Workspace-Data-Isolation.md) | Verify Financial Data Is Isolated Between Workspaces | Security | — | Critical |
