# Test Summary Report — Vacancy Review and Community Feedback Platform

## 1. Overview

| Field | Value |
|---|---|
| Project | Vacancy Review and Community Feedback Platform |
| Platform | Web (desktop and mobile browsers) |
| Role | QA Lead |
| Test Plan | [Vacancy-Review-and-Community-Feedback-Platform-Test-Plan.md](../Test-Plans/Vacancy-Review-and-Community-Feedback-Platform-Test-Plan.md) |

## 2. Test Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | iMac; iOS device for mobile-web checks |
| Operating System | macOS Tahoe 26.5.1 |
| Browser | Google Chrome 149 |

## 3. Tested Areas

- Vacancy import, categorization and title display
- Social login and session handling
- Behavior after clearing site data (session recovery, anonymous state)
- Comments, anonymous comments and comment validation
- Quick Poll voting and percentage calculations
- Blog statistics and publication time
- Profile placeholders and long-content layout
- Add to Home Screen instructions on iOS

## 4. Documentation Produced

| Artifact | Count |
|---|---:|
| Bug reports | 11 |
| Test scenarios | 4 |
| Test cases | 11 |
| Checklists | 1 |
| Requirements in RTM | 11 |

## 5. Defect Summary

### By Severity

| Severity | Count |
|---|---:|
| Critical | 1 |
| High | 6 |
| Medium | 4 |
| **Total** | **11** |

### By Priority

| Priority | Count |
|---|---:|
| Urgent | 1 |
| High | 8 |
| Normal | 2 |

### Most Important Defects

| ID | Title | Severity | Priority |
|---|---|---|---|
| BR-002 | Vacancy Is Assigned to an Incorrect Category | High | Urgent |
| BR-003 | Application Crashes After Site Data Is Cleared | Critical | High |

### Full Defect List

See [`Bug-Reports/`](../Web-Platform-Testing/Vacancy%20Review%20and%20Community%20Feedback%20Platform/Bug-Reports/README.md).

## 6. Risks and Open Issues

| Risk | Impact |
|---|---|
| Vacancies assigned to wrong categories | Users cannot find relevant vacancies |
| Crash after clearing site data | Platform unusable until reload; data exposure |
| Social login fails | Users cannot participate in the community |
| Poll percentages do not total 100% | Loss of trust in community data |

## 7. Recommendations

- Fix Critical and Urgent defects before release and retest them on the test environment.
- Add the scenarios linked to these defects to the regular regression suite.
- Re-run the project checklists after each release candidate.
- Clarify open requirement questions with the Product Owner.

## 8. Release Recommendation

**Not recommended for release until Critical and Urgent defects are fixed and retested.** After the fixes are verified and targeted regression passes, the build can be recommended for release.

> Execution metrics (passed / failed / blocked counts) are not included because they were tracked in the project's internal tools, which are confidential. The counts above reflect the documented artifacts in this portfolio.

## Confidentiality

The original product name, URLs, user data and internal identifiers are excluded.
