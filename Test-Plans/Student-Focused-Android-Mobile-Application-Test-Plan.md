# Test Plan — Student-Focused Android Mobile Application

## 1. Introduction

This test plan describes the QA approach for a student-focused Android social application with matching, chat, activity sharing, notifications and privacy settings. I coordinated QA activities on this project as **QA Lead**.

## 2. Objectives

- Verify that the critical user flows work correctly on the target environment.
- Identify functional, validation, UI and usability defects before release.
- Keep test documentation (scenarios, test cases, checklists, RTM) up to date for regression.
- Provide a clear quality status and release recommendation.

## 3. Scope

### In Scope

- Privacy settings and messaging permissions (Allow Messages)
- Chat and online/offline presence status
- Notifications and notification settings
- New Match flow and navigation
- Activity and post sharing (links)
- Profile, interests panel and image crop layout

### Out of Scope

- iOS version of the application
- Back-end matching algorithm quality
- Performance and battery testing

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
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |

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
| Privacy setting not enforced | Unwanted messages, user safety and trust issues | Privacy rule tests with two accounts |
| Wrong presence status | Misleading chat experience | Presence checks across app states (foreground, background, killed) |
| Notification opens wrong screen | Users miss new matches | Deep-link verification for every notification type |
| Settings show unsaved warning after save | Confusing UX, repeated actions | State checks after save, navigation and relaunch |
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
| Bug reports | [`Bug-Reports/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/Bug-Reports/README.md) |
| Test cases | [`Test-Cases/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/Test-Cases/README.md) |
| Test scenarios | [`Test-Scenarios/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/Test-Scenarios/) |
| Checklists | [`Checklists/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/Checklists/) |
| Requirements Traceability Matrix | [`RTM/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/RTM/RTM.md) |
| Test summary report | [`Test-Reports/`](../Test-Reports/Student-Focused-Android-Mobile-Application-Test-Summary-Report.md) |

## Confidentiality

The original product name, URLs, user data and internal identifiers are excluded.
