# AI-REC-BUG-007 – “View Details” Button Does Not Respond on Candidate Record

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Medium  
**Priority:** Normal  
**Reproducibility:** 100%  

---

## Test Environment

| Item | Value |
|------|--------|
| Device | iMac |
| Operating System | macOS Tahoe 26.0.1 |
| Browser | Google Chrome Version 141.0.7390.77 (Official Build) (arm64) |

---

## Precondition
User is logged into the system and has access to the Candidates list.

---

## Steps to Reproduce
1. Navigate to the platform.  
2. Open the **Candidates** module.  
3. View the list of candidates.  
4. Click the **“View Details”** button on any candidate entry.

---

## Actual Result
- The **“View Details”** button does not respond.  
- No page redirection occurs.  
- Candidate details are not loaded.

---

## Expected Result
- Clicking the **“View Details”** button should redirect the user to the candidate’s detailed profile page and load all related information.

---

## Additional Evidence
Video recording available in the original report.
