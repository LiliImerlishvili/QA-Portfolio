# ID: AI-REC-BUG-001 -  Excel Bulk Import Fails With Position `[object Object]` Error  
**Project:** AI-Based Recruiting System (Confidential)  
**Severity:** Major  
**Priority:** Urgent  
**Reproducibility:** 100%  

---

##  Test Environment

| Item                | Value                                              |
|---------------------|----------------------------------------------------|
| Device              | iMac                                               |
| Operating System    | macOS Tahoe 26.0.1                                 |
| Browser             | Google Chrome 141.0.7390.66 (Official Build) arm64 |

---

## Precondition
The employer account is active, and the company already has:  
- At least one existing **project**  
- Existing **departments**  
- Valid **position titles** (e.g., developer, tester, HR assistant, senior HR director, account manager)

---

## Steps to Reproduce

1. Open the web application (AI-based recruiting system).  
2. Log in as an employer user.  
3. Navigate to **“My Projects”**.  
4. Select any active project and open the **“Bulk upload”** option.  
5. Choose a company/project if required.  
6. Click **“Choose file”**.  
7. Select the Excel template containing employee/candidate data, including:  
   - First/last name, email, phone  
   - Country, city, experience, previous company  
   - Position title  
   - Salary and other recruitment-related fields  
   *(All position titles in the file are valid and exist in the system.)*  
8. Click **Upload** to import the Excel file.

---

##  Actual Result

The system fails to import the file and displays validation errors:

- **General detected issues**  
  - `Found issue: [object Object]`  
  - “Please do not change these position names in the template.”

- **Validation error example:**  
  - Row 3: `position_title – Position "[object Object]" does not exist`  
  - System lists available positions, even though the provided value matches one of them.

As a result, **bulk import is blocked**, and no records are created.

---

##  Expected Result

- The system should correctly parse the `position_title` values from the Excel file.  
- If the provided titles exist in the database, the import should complete successfully.  
- All employees/candidates should be created under the selected project without errors.

---

## Additional Evidence
A reproduction video and console logs are available in the original task (Jam link).

---
