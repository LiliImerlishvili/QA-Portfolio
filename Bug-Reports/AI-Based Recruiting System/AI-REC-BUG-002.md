# AI-REC-BUG-002 – User Cannot Access Profile Page

**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
**Reproducibility:** 80%  

---

## Test Environment

| Item | Value |
|------|--------|
| Device | iMac |
| Operating System | macOS Tahoe 26.0.1 |
| Browser | Google Chrome Version 141.0.7390.66 (Official Build) (arm64) |

---

## Precondition
Employer user has a valid account and can log in successfully.

---

## Steps to Reproduce

1. Open the AI-based recruiting platform.  
2. Log in using an employer account.  
3. Click **“Settings”** from the main navigation.  
4. Open **“Account Settings.”**  
5. On the right-side menu, click **“Profile.”**  
6. Attempt to load the Profile page.

---

## Actual Result

The Profile page fails to load.  
The system displays an error message:

**"User not found"**

---

## Expected Result

The Profile page should open successfully and display all employer profile information and account details.

---

## Additional Evidence

Reproduction video (Jam link):  
jam.dev/c/fc4f53d9-438b-41aa-976d-016987b5de12
