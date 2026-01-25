# TC-PREV-001 – Verify Fullscreen Image Close Returns to Same Product

**Purpose:**  
To verify that closing fullscreen preview keeps user on the same product page.

**Related Bug:** UI-PREV-041  
**Module / Feature:** Product Image Preview  
**Priority:** Medium  

**Preconditions:**  
- Product has images and fullscreen preview is enabled.

**Environment:**  
- macOS · Chrome 142.x  

---

### Steps:
1. Open any product page.  
2. Click on main product image to open fullscreen.  
3. Close the fullscreen preview (using X or Back).  

---

### Expected Result:
- User remains on the same product page.  
- No redirect to a different product or recommendation.

---

### Status:
❌ Failed
