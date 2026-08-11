# TC-BRND-002 – Verify Brand URL Returns Correct Brand Products

**Purpose:**  
To verify that brand listing URL with brand parameter returns correct products.

**Related Bug:** CAT-BRND-007  
**Module / Feature:** Brand Filtering / URL Params  
**Priority:** Medium  

**Preconditions:**  
- Brand category URLs are active.  

**Environment:**  
Same as TC-BRND-001

---

### Steps:
1. Copy the URL from the Levi’s listing page (e.g., `...?category=levis`).  
2. Open a new tab.  
3. Paste the URL and press Enter.  
4. Verify the products displayed.  

---

### Expected Result:
- URL with brand parameter returns only products of that brand.  
- No unrelated brands (e.g., Jeep, ALOHAS, FALKE) appear.

---

### Status:
❌ Failed
