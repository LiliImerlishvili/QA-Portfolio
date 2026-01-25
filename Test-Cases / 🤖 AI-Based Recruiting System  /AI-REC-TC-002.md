# AI-REC-TC-002 – Validate Error Handling for Invalid Position Titles

**Related Bug:** AI-REC-BUG-001  
**Module:** Bulk Import  
**Type:** Negative Test  
**Priority:** Medium  
**Precondition:**  
- Employer account exists  
- Excel file contains an invalid or corrupted Position Title field  

---

## Steps
1. Log into the platform.  
2. Go to **My Projects → Bulk Upload**.  
3. Select Excel file with corrupted/invalid position_title value.  
4. Click **Upload**.

---

## Expected Result
- System should return a clear validation message explaining which field is invalid.  
- No internal errors (e.g., `[object Object]`) should be shown.
