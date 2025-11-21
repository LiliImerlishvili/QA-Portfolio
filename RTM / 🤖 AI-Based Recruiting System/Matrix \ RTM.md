# Requirements Traceability Matrix (RTM)
AI-Based Recruiting System (Confidential)

This table provides full traceability between system requirements, test scenarios, test cases, and reported defects.

---

| Requirement ID | Requirement Description | Test Scenarios | Test Cases | Bugs |
|----------------|--------------------------|----------------|-------------|-------|
| **AI-REC-REQ-001** | System must support bulk import of candidates via Excel | TS-001 | TC-001, TC-002 | BUG-001 |
| **AI-REC-REQ-002** | System must validate all fields in Excel during import | TS-001, TS-008 | TC-001, TC-002 | BUG-001 |
| **AI-REC-REQ-003** | User must be able to access their profile page | TS-002 | TC-003 | BUG-002 (Profile Page) |
| **AI-REC-REQ-004** | User profile must load without errors | TS-002 | TC-003 | BUG-002 (Profile Page) |
| **AI-REC-REQ-005** | Candidate detail page must open from candidate list | TS-003 | TC-004 | BUG-002 (View Details) |
| **AI-REC-REQ-006** | System must allow admin to create HR users | TS-004 | TC-005 | BUG-003 |
| **AI-REC-REQ-007** | Duplicate emails must be prevented during HR user creation | TS-004 | TC-005 | BUG-003 |
| **AI-REC-REQ-008** | System must analyze candidate CV using AI | TS-005 | TC-006 | BUG-004 |
| **AI-REC-REQ-009** | CV analysis must not return false connection errors | TS-005 | TC-006 | BUG-004 |
| **AI-REC-REQ-010** | Candidate contact page must open from candidate list | TS-006 | TC-007 | BUG-005 |
| **AI-REC-REQ-011** | No 404 errors should occur on accessible pages | TS-006, TS-003 | TC-004, TC-007 | BUG-005 |
| **AI-REC-REQ-012** | Test-Question section must maintain layout integrity | TS-007 | TC-008 | BUG-006 |
| **AI-REC-REQ-013** | UI layout must remain stable on scroll and resize | TS-007 | TC-008 | BUG-006 |
| **AI-REC-REQ-014** | System must show user-friendly validation messages | TS-008 | TC-002 | BUG-001 |
| **AI-REC-REQ-015** | System must restrict module access based on user role | TS-009 | — | — |
| **AI-REC-REQ-016** | System must support full end-to-end hiring workflow | TS-010 | TC-001, TC-003, TC-004, TC-006, TC-007 | BUG-001, BUG-002, BUG-004, BUG-005 |

---

### Notes
- Requirements follow NDA-safe structure and do not reveal confidential system details.  
- Requirements, Test Cases, Test Scenarios, and Bugs use consistent ID format:  
  - Requirements — **AI-REC-REQ-XXX**  
  - Scenarios — **AI-REC-TS-XXX**  
  - Test Cases — **AI-REC-TC-XXX**  
  - Bugs — **AI-REC-BUG-XXX**  
- Table is designed for portfolio-quality traceability demonstration.
