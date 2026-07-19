# AI-REC-BUG-005 – Candidate Contact Page Returns 404 Error

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
**Reproducibility:** 100%  

---

## Test Environment

| Item | Value |
|------|--------|
| Device | iMac |
| Operating System | macOS Tahoe 26.0.1 |
| Browser | Google Chrome Version 141.0.7390.56 (Official Build) (arm64) |

---

## Precondition
None.

---

## Steps to Reproduce
1. Log in to the AI-based recruiting platform using an employer account.  
2. Open the candidate list.  
3. Click the **“Contact”** option on any candidate.

---

## Actual Result
- The system does not open the candidate’s contact page.  
- Instead, a **404 error page** is displayed:
  - *“The page you are looking for does not exist or has been removed.”*

---

## Expected Result
- The "Contact" button should correctly redirect the user to the candidate’s contact information page without errors.

---

## Additional Evidence
Screen recording (Loom): *Loom – 8 October 2025*
