# Test Plan — Vacancy Review and Community Feedback Platform

## 1. Introduction

This test plan describes the QA approach for a community platform where users review job vacancies, leave comments (including anonymously), vote in quick polls and read blog content. I coordinated QA activities on this project as **QA Lead**.

## 2. Objectives

- Verify that the critical user flows work correctly on the target environment.
- Identify functional, validation, UI and usability defects before release.
- Keep test documentation (scenarios, test cases, checklists, RTM) up to date for regression.
- Provide a clear quality status and release recommendation.

## 3. Scope

### In Scope

- Vacancy import, categorization and title display
- Social login and session handling
- Behavior after clearing site data (session recovery, anonymous state)
- Comments, anonymous comments and comment validation
- Quick Poll voting and percentage calculations
- Blog statistics and publication time
- Profile placeholders and long-content layout
- Add to Home Screen instructions on iOS

### Out of Scope

- Vacancy source systems outside the platform
- Moderation back-office
- Load and security penetration testing

## 4. Test Approach

| Test Type | Purpose |
|---|---|
| Functional testing | Verify features against requirements and expected behavior |
| Exploratory testing | Find issues outside documented scenarios |
| Negative and boundary testing | Verify validation and error handling |
| UI / UX testing | Verify layout, readability and consistency |
| Regression testing | Verify fixes and detect side effects |

Testing follows the processes described in [`QA-Processes/`](../QA-Processes/README.md).

## 5. Test Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac; iOS device for mobile-web checks |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## 6. Roles and Responsibilities

| Role | Responsibilities |
|---|---|
| QA Lead | Scope and priorities, task distribution, bug report review, regression coordination, reporting |
| QA Engineers / Interns | Test execution, bug reporting, retesting |
| Developers | Defect investigation, fixes, root-cause notes |
| Product Owner | Requirement clarification, priority decisions on recommendations |

## 7. Risks and Mitigation

| Risk | Impact | Mitigation |
|---|---|---|
| Vacancies assigned to wrong categories | Users cannot find relevant vacancies | Category mapping checks on imported data |
| Crash after clearing site data | Platform unusable until reload; data exposure | Storage-reset scenarios in every regression |
| Social login fails | Users cannot participate in the community | Login tests for each provider and after cancel/retry |
| Poll percentages do not total 100% | Loss of trust in community data | Calculation checks with different vote counts |
| Missing or changing requirements | Unclear expected behavior | Clarify with the Product Owner; report unclear items as recommendations |

## 8. Entry Criteria

- A testable build is deployed to the test environment.
- Test accounts and access are available.
- Scope and critical flows are agreed.

## 9. Exit Criteria

- All planned scenarios and critical test cases are executed.
- No open Critical defects; High defects are fixed or accepted by the Product Owner.
- Retests of fixed defects are completed.
- The test summary report is shared with the team.

## 10. Deliverables

| Deliverable | Location |
|---|---|
| Bug reports | [`Bug-Reports/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/Bug-Reports/README.md) |
| Test cases | [`Test-Cases/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/Test-Cases/README.md) |
| Test scenarios | [`Test-Scenarios/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/Test-Scenarios/) |
| Checklists | [`Checklists/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/Checklists/) |
| Requirements Traceability Matrix | [`RTM/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/RTM/RTM.md) |
| Test summary report | [`Test-Reports/`](../Test-Reports/Vacancy-Review-and-Community-Feedback-Platform-Test-Summary-Report.md) |

## Confidentiality

The original product name, URLs, user data and internal identifiers are excluded.
