# AI-REC-TC-001 – Verify Excel Bulk Import With Valid Position Titles

**Related Bug:** AI-REC-BUG-001  
**Module:** Bulk Import  
**Type:** Functional Test  
**Priority:** High  
**Precondition:**  
- Employer account exists  
- Valid departments and position titles exist  
- Excel template is prepared with valid data  

---

## Steps
1. Log in as an employer.  
2. Navigate to **My Projects**.  
3. Open **Bulk Upload**.  
4. Select the prepared Excel file with valid position titles.  
5. Click **Upload**.

---

## Expected Result
- System should validate the file successfully.  
- No `[object Object]` or position-related errors should appear.  
- All records should be imported without blocking errors.
