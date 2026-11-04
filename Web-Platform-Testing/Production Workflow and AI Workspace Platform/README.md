# Production Workflow and AI Workspace Platform

B2B web platform designed to centralize project operations, team collaboration, production workflows, financial processes and AI-assisted functionality. Role: **Manual QA Engineer**.

## Challenge

The platform includes interconnected modules, role-based access and multi-workspace data isolation. Changes in one area could affect projects, pipelines, financial data, reports or related records, making consistency and permission validation especially important.

## Approach

- Tested complex end-to-end project workflows
- Validated authentication, workspace settings and user permissions
- Tested Owner, Admin, Member and Guest role behavior
- Verified project, pipeline, CRM, crew and task-related flows
- Tested budgets, invoices, financial calculations and reporting consistency
- Validated calendars, files and integrations
- Tested data persistence after refresh and re-login
- Verified cross-module synchronization and workspace isolation
- Tested forms, edge cases, empty states and responsive behavior
- Tested AI-assisted workflows, reply options and attachments
- Verified AI batch actions, previews and duplicate prevention
- Tested configurable layouts, custom properties and role-based views
- Performed functional, exploratory and regression testing
- Reported defects with clear steps, expected/actual results and evidence

## Key Findings

- Role and permission inconsistencies
- Data persistence and synchronization issues
- Validation and edge-case defects
- Financial and reporting inconsistencies
- Navigation and responsive UI issues
- AI workflow and attachment defects
- Regression issues after updates

## Impact

Improved reliability of critical workflows, strengthened permission and data-isolation coverage, and increased regression coverage across interconnected modules and AI-assisted features.

## Documentation in This Project

| Folder | Content |
|---|---|
| [`Bug-Reports/`](Bug-Reports/README.md) | 4 bug reports and 2 recommendations, with full defect lifecycle (status, root cause, retest) |
| [`Test-Cases/`](Test-Cases/README.md) | 16 test cases (positive, negative, edge case, permission, security) |
| [`Test-Scenarios/`](Test-Scenarios/) | 7 end-to-end scenarios |
| [`Checklists/`](Checklists/) | 3 reusable regression checklists |
| [`RTM/`](RTM/RTM.md) | Requirements Traceability Matrix |

## Tools & Technologies

Notion · Chrome DevTools · Jam · ScreenPal · AI Feature Testing · Functional Testing · Regression Testing · Exploratory Testing · UI Testing

## Confidentiality

All materials are anonymized. The product name, domains, workspace data, team member names, commit references and evidence links are excluded.
