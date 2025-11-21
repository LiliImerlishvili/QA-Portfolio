# ID AI-REC-BUG-005 - Candidate Contact Page Returns 404 Error

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
**Reproducibility:** 100%  

---

## Test Environment

| Item                | Value                                              |
|---------------------|----------------------------------------------------|
| Device              | iMac                                               |
| Operating System    | macOS Tahoe 26.0.1                                 |
| Browser             | Google Chrome Version 141.0.7390.56 (Official Build) (arm64) |

---

## Precondition
None.

---

## Steps to Reproduce

1. Open the web platform and log in using an employer account.  
2. From the candidate list, click the “Contact” option.

---

## Actual Result

The system does not open the candidate’s contact page.  
Instead, it redirects to a **404 error page** showing the message:  
**"The page you are looking for does not exist or has been removed."**

---

## Expected Result

The “Contact” button should redirect the user to the candidate’s contact information page without errors.

---

## Additional Evidence

Reproduction video (Loom):  
Loom Hr Thoth – 8 October 2025
