# TC-RSP-001 – Verify Category Listing Layout at 991×1051 Resolution

**Purpose:**  
To validate correct responsive behavior at mid-width breakpoint.

**Related Bug:** UI-RSP-031  
**Module / Feature:** Responsive Layout – Category Listing  
**Priority:** Medium  

**Preconditions:**  
- Category listing page is available.  

**Environment:**  
- Chrome DevTools Responsive Mode (991×1051)

---

### Steps:
1. Open DevTools.  
2. Switch to Responsive mode.  
3. Set resolution to **991×1051**.  
4. Navigate to product category listing page.  
5. Scroll through listing.

---

### Expected Result:
- Grid layout remains aligned.  
- No elements overlap or go out of container bounds.  
- Text and buttons remain fully visible.

---

### Status:
❌ Failed
