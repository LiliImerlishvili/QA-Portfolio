# Requirement Traceability Matrix — Healthcare Staffing Mobile Application

| Requirement ID | Requirement | Test Scenario | Test Case | Checklist | Related Defect | Status |
|---|---|---|---|---|---|---|
| REQ-001 | Minijob form must submit without server errors | TS-001 | TC-001 | CL-001 | BR-001 | Not Executed |
| REQ-002 | Employer fields must not block form submission | TS-001 | TC-002 | CL-001 | BR-001 | Not Executed |
| REQ-003 | Valid German addresses must be accepted during onboarding | TS-002 | TC-003 | CL-001 | BR-002 | Not Executed |
| REQ-004 | Addresses outside Germany must be rejected with a clear message | TS-002 | TC-004 | CL-001 | — | Not Executed |
| REQ-005 | Address validation must be consistent across flows | TS-002 | TC-005 | CL-001 | BR-002 | Not Executed |
| REQ-006 | Required documents must be uploaded before proceeding | TS-001 | TC-006, TC-007 | CL-001 | BR-003 | Not Executed |
| REQ-007 | Keyboard must dismiss on navigation | TS-004 | TC-008 | CL-003 | BR-004 | Not Executed |
| REQ-008 | Loading skeleton must fully cover content | TS-005 | TC-009 | CL-003 | BR-005 | Not Executed |
| REQ-009 | Bio limit must show a specific validation message | TS-004 | TC-010 | CL-003 | BR-006 | Not Executed |
| REQ-010 | Bio must accept values up to 1000 characters | TS-004 | TC-011 | CL-003 | — | Not Executed |
| REQ-011 | OTP field must accept numeric characters only | TS-003 | TC-012 | CL-002 | BR-007 | Not Executed |
| REQ-012 | OTP verification must lock after 3 incorrect attempts | TS-003 | TC-013 | CL-002 | BR-008 | Not Executed |
| REQ-013 | Resend Code must issue a new OTP and invalidate the old one | TS-003 | TC-014 | CL-002 | BR-008 | Not Executed |

## Coverage Summary

| Artifact Type | Count |
|---|---:|
| Requirements | 13 |
| Test Scenarios | 5 |
| Test Cases | 14 |
| Checklists | 3 |
| Related Defects | 8 (6 bugs, 2 improvements) |
