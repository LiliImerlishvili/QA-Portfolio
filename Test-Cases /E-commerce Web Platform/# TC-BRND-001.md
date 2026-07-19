# TC-BRND-001 – Verify Brand Page Shows Only Selected Brand Products

**Purpose:**  
To validate that selecting a brand (e.g., "Levi’s") shows only that brand’s products.

**Related Bug:** CAT-BRND-007  
**Module / Feature:** Brands / Catalog  
**Priority:** High  

**Preconditions:**  
- Brand list is configured.  
- Products are assigned to specific brands.

**Environment:**  
- Device: Windows 10  
- Browser: Chrome 141.x

---

### Steps:
1. Open homepage.  
2. Navigate to **Brands** section.  
3. Click on brand **"Levi’s"**.  
4. Observe the products displayed in the listing.  
5. Check product titles/labels for brand name.

---

### Expected Result:
- All visible products are associated with **Levi’s**.  
- No products from other brands appear in the list.

---

### Status:
❌ Failed
