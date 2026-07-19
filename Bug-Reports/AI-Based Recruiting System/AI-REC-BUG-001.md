# AI-REC-BUG-001 – Excel Bulk Import Fails With Position `[object Object]` Error

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
| Browser | Google Chrome 141.0.7390.66 (Official Build) arm64 |

---

## Precondition
The employer account is active and contains:
- At least one existing project  
- Existing departments  
- Valid position titles in the system (developer, tester, HR assistant, senior HR director, account manager)

---

## Steps to Reproduce

1. Open the AI-based recruiting system in the browser.  
2. Log in as an employer.  
3. Navigate to **"My Projects"**.  
4. Select any active project and open the **"Bulk upload"** option.  
5. Choose a company or project if required.  
6. Click **"Choose file"**.  
7. Select the Excel template containing candidate/employee data:  
   - First/last name, email, phone  
   - Country, city, experience, previous company  
   - Position title  
   - Salary and additional recruitment fields  
8. Click **Upload**.

---

## Actual Result

- System fails to import the file  
- Shows general detected issues  
- Errors include:  
  - “Found issue: [object Object]”  
  - “Please do not change these position names in the template.”  
- Row-level validation example:  
  - **Row 3: position_title – Position "[object Object]" does not exist**  
- Import is blocked and no records are created.

---

## Expected Result

- System should correctly parse the `position_title` values.  
- Import must succeed when valid titles are included.  
- All records should be created under the selected project.

---

## Additional Evidence
A reproduction video and console logs are provided in the original task (Jam link).
