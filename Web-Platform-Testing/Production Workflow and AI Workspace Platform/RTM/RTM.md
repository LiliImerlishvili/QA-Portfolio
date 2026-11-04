# Requirement Traceability Matrix — Production Workflow and AI Workspace Platform

| Requirement ID | Requirement | Test Scenario | Test Case | Checklist | Related Defect | Status |
|---|---|---|---|---|---|---|
| REQ-001 | Identity conflicts must show a specific message and no Welcome email | TS-001 | TC-001 | CL-001 | BR-001 | Not Executed |
| REQ-002 | New users must be able to sign up with email and password | TS-001 | TC-002 | CL-001 | — | Not Executed |
| REQ-003 | Portal must authorize against the current environment | TS-002 | TC-003 | CL-001 | BR-002 | Not Executed |
| REQ-004 | Payment Status must follow project invoice statuses | TS-003 | TC-004, TC-005 | CL-002 | BR-003 | Not Executed |
| REQ-005 | Project without invoices must keep the manual status | TS-003 | TC-006 | CL-002 | BR-003 | Not Executed |
| REQ-006 | Overdue invoices must be counted in the Overdue summary | TS-004 | TC-007, TC-008 | CL-002 | BR-004 | Not Executed |
| REQ-007 | Overdue amounts must be consistent in Reports and dashboard | TS-004 | TC-009 | CL-002 | BR-004 | Not Executed |
| REQ-008 | Deactivation request must send a confirmation email | TS-005 | TC-010 | CL-001 | BR-005 | Not Executed |
| REQ-009 | Scheduled deactivation must be cancellable | TS-005 | TC-011 | CL-001 | BR-005 | Not Executed |
| REQ-010 | Sole workspace owners must not self-deactivate | TS-005 | TC-012 | CL-001 | BR-005 | Not Executed |
| REQ-011 | Bid and Budget totals must be comparable | TS-006 | TC-013 | CL-002 | BR-006 | Not Executed |
| REQ-012 | Roles must see only permitted financial data | TS-007 | TC-014 | CL-003 | — | Not Executed |
| REQ-013 | Financial data must persist after refresh and re-login | TS-003 | TC-015 | CL-002 | — | Not Executed |
| REQ-014 | Data must be isolated between workspaces | TS-007 | TC-016 | CL-003 | — | Not Executed |

## Coverage Summary

| Artifact Type | Count |
|---|---:|
| Requirements | 14 |
| Test Scenarios | 7 |
| Test Cases | 16 |
| Checklists | 3 |
| Related Defects | 6 (4 bugs, 2 recommendations) |
