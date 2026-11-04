# Test Summary Report — Student-Focused Android Mobile Application

## 1. Overview

| Field | Value |
|---|---|
| Project | Student-Focused Android Mobile Application |
| Platform | Android |
| Role | QA Lead |
| Test Plan | [Student-Focused-Android-Mobile-Application-Test-Plan.md](../Test-Plans/Student-Focused-Android-Mobile-Application-Test-Plan.md) |

## 2. Test Environment

| Field | Value |
|---|---|
| Environment | Staging |
| Device | Android Studio Emulator — Medium Phone API 36.1 |
| Operating System | Android 16 |
| Application Version | 2.0.1 |

## 3. Tested Areas

- Privacy settings and messaging permissions (Allow Messages)
- Chat and online/offline presence status
- Notifications and notification settings
- New Match flow and navigation
- Activity and post sharing (links)
- Profile, interests panel and image crop layout

## 4. Documentation Produced

| Artifact | Count |
|---|---:|
| Bug reports | 10 |
| Test scenarios | 3 |
| Test cases | 10 |
| Checklists | 1 |
| Requirements in RTM | 10 |

## 5. Defect Summary

### By Severity

| Severity | Count |
|---|---:|
| High | 3 |
| Medium | 7 |
| **Total** | **10** |

### By Priority

| Priority | Count |
|---|---:|
| High | 6 |
| Normal | 3 |
| Low | 1 |

### Most Important Defects

| ID | Title | Severity | Priority |
|---|---|---|---|
| BR-002 | Users Can Send Messages While Allow Messages Is Disabled | High | High |
| BR-003 | Chat Displays Incorrect Online or Offline Status | High | High |
| BR-007 | New Match Notification Opens an Old Chat Instead of the Current Profile | High | High |

### Full Defect List

See [`Bug-Reports/`](../Mobile-Testing/Student-Focused%20Android%20Mobile%20Application/Bug-Reports/README.md).

## 6. Risks and Open Issues

| Risk | Impact |
|---|---|
| Privacy setting not enforced | Unwanted messages, user safety and trust issues |
| Wrong presence status | Misleading chat experience |
| Notification opens wrong screen | Users miss new matches |
| Settings show unsaved warning after save | Confusing UX, repeated actions |

## 7. Recommendations

- Fix High-severity defects before release and retest them on the test environment.
- Add the scenarios linked to these defects to the regular regression suite.
- Re-run the project checklists after each release candidate.
- Clarify open requirement questions with the Product Owner.

## 8. Release Recommendation

**Not recommended for release until High-severity defects are fixed and retested.** After the fixes are verified and targeted regression passes, the build can be recommended for release.

> Execution metrics (passed / failed / blocked counts) are not included because they were tracked in the project's internal tools, which are confidential. The counts above reflect the documented artifacts in this portfolio.

## Confidentiality

The original product name, URLs, user data and internal identifiers are excluded.
