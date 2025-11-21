# 🧩 Requirements - Test Scenarios - Test Cases - Bug Reports Traceability Matrix

This matrix links high-level **Test Scenarios** to **Test Cases** and related **Bug Reports**.  
It shows how real user flows are covered by detailed tests and which defects were found during execution.

---

## 📋 High-level Matrix

| Scenario ID | Scenario                                                          | Test Cases                                      | Bug Reports                                      |
|------------|--------------------------------------------------------------------|-------------------------------------------------|--------------------------------------------------|
| TS-001     | User registration and account creation                             | TC-REG-001, TC-REG-002                          | FORM-VAL-063                                     |
| TS-002     | Browsing categories and applying product filters                   | TC-FLTR-001, TC-FLTR-002, TC-BRND-001, TC-BRND-002 | UI-FLTR-093, CAT-BRND-007                      |
| TS-003     | Adding a product to cart and validating checkout                   | (TBD - no detailed TCs yet)                     | -                                                |
| TS-004     | Switching website language from KA → EN                            | TC-LNG-001, TC-LNG-002                          | UI-LNG-002                                       |
| TS-005     | Validating API responses on product listing                        | (Planned: API TCs)                              | -                                                |
| TS-006     | Viewing product details and verifying size/variant selection       | TC-SIZE-001, TC-SIZE-002, TC-SZCH-001, TC-ATTR-001 | UI-SIZE-081, UI-SIZECHART-104, UI-COLORCAT-147 |
| TS-007     | Verifying Similar & Recommended Products relevance                 | TC-SIM-001, TC-SIMBR-001                        | UI-SIM-052, UI-SIMBRAND-118                      |
| TS-008     | Full mobile product page navigation and responsive checks          | TC-RSP-001, TC-PREV-001                         | UI-RSP-031, UI-PREV-041                          |
| TS-009     | Figma-to-UI design validation for product page layout              | TC-DSN-001, TC-TIT-001, TC-ATTR-001             | UI-DESIGNMATCH-132, UI-TITLE-159, UI-COLORCAT-147|
| TS-010     | Full wishlist (Favorites) add/remove/refresh flow                  | TC-FAV-001, TC-FAV-002                          | UI-FAV-072                                       |
| TS-011     | Search functionality with keyword relevance                        | (TBD)                                           | -                                                |
| TS-012     | Pagination and infinite scroll navigation                          | TC-GRID-001, TC-FLTR-002                        | UI-GRID-022, UI-FLTR-093                         |
| TS-013     | Checkout error handling with invalid payment or form data          | (TBD)                                           | -                                                |
| TS-014     | Brand-based product discovery and URL parameter validation         | TC-BRND-001, TC-BRND-002                        | CAT-BRND-007                                     |
| TS-015     | Email-based actions: restore password & email validation flows     | TC-REG-002                                      | FORM-VAL-063                                     |

> ✅ *TBD rows intentionally დარჩენილია, რომ აჩვენოს რომ მომავალში შეგიძლია დაამატო ახალი Test Case-ები იმავე სტრუქტურით.*

---

## 🔍 Detailed Mapping by Functional Area

### 🔐 Registration & Authentication

- **Scenario:** TS-001 – User registration and account creation  
- **Test Cases:**  
  - TC-REG-001 – Successful registration with valid email  
  - TC-REG-002 – Registration with invalid email format  
- **Bug Reports:**  
  - FORM-VAL-063 – Email field does not validate invalid formats correctly  

---

### 🧭 Catalog, Filters & Brands

- **Scenario:** TS-002 – Browsing categories and applying product filters  
- **Test Cases:**  
  - TC-FLTR-001 – Category filter shows only matching products  
  - TC-FLTR-002 – Filter persistence after multiple page navigation  
  - TC-BRND-001 – Brand page shows only selected brand products  
  - TC-BRND-002 – Brand URL parameters return correct brand products  
- **Bug Reports:**  
  - UI-FLTR-093 – Filters reset or behave inconsistently after navigation  
  - CAT-BRND-007 – Brand listing mixes products from multiple brands  

- **Scenario:** TS-014 – Brand-based product discovery and URL validation  
  - Same Test Cases: TC-BRND-001, TC-BRND-002  
  - Same Bug: CAT-BRND-007  

---

### 🌐 Localization

- **Scenario:** TS-004 – Switching website language from KA → EN  
- **Test Cases:**  
  - TC-LNG-001 – Verify language switch updates all UI components  
  - TC-LNG-002 – Banner fallback behavior when translation is missing  
- **Bug Reports:**  
  - UI-LNG-002 – Service Info Banner remains in Georgian after language switch  

---

### 🧵 Product Details, Sizes & Attributes

- **Scenario:** TS-006 – Viewing product details and verifying size/variant selection  
- **Test Cases:**  
  - TC-SIZE-001 – Verify only available sizes are shown  
  - TC-SIZE-002 – Unavailable sizes cannot be selected  
  - TC-SZCH-001 – Size chart modal shows correct product info  
  - TC-ATTR-001 – Product attributes block matches design and spec  
- **Bug Reports:**  
  - UI-SIZE-081 – Incorrect size options in dropdown  
  - UI-SIZECHART-104 – Size chart displays wrong or unrelated product info  
  - UI-COLORCAT-147 – Attributes and color categories are overloaded or mismatched  

---

### 💡 Recommendations & Similar Products

- **Scenario:** TS-007 – Verifying Similar & Recommended Products relevance  
- **Test Cases:**  
  - TC-SIM-001 – Similar products are relevant to current product  
  - TC-SIMBR-001 – Similar products from same brand only  
- **Bug Reports:**  
  - UI-SIM-052 – Similar products show unrelated categories  
  - UI-SIMBRAND-118 – Brand-based recommendations show other brands  

---

### 📱 Responsive & Mobile Behavior

- **Scenario:** TS-008 – Full mobile product page navigation and responsive checks  
- **Test Cases:**  
  - TC-RSP-001 – Category listing layout at 991×1051 resolution  
  - TC-PREV-001 – Closing fullscreen image returns to same product  
- **Bug Reports:**  
  - UI-RSP-031 – Layout breaks on 991×1051 or mobile resolutions  
  - UI-PREV-041 – Closing image preview redirects to wrong product  

---

### 🎨 Design Match (Figma vs Live)

- **Scenario:** TS-009 – Figma-to-UI design validation for product page layout  
- **Test Cases:**  
  - TC-DSN-001 – "Code & Delivery" block matches Figma design  
  - TC-TIT-001 – Product title layout matches Figma  
  - TC-ATTR-001 – Product attributes block matches design & spec  
- **Bug Reports:**  
  - UI-DESIGNMATCH-132 – Product details layout does not match Figma  
  - UI-TITLE-159 – Product title block styling differs from design  
  - UI-COLORCAT-147 – Attributes section overfilled, not as in design  

---

### ❤️ Favorites / Wishlist

- **Scenario:** TS-010 – Full wishlist add/remove/refresh flow  
- **Test Cases:**  
  - TC-FAV-001 – Add product to favorites list  
  - TC-FAV-002 – Remove product from favorites  
- **Bug Reports:**  
  - UI-FAV-072 – Favorites behavior is inconsistent across actions  

---

### 📄 Pagination & Footer Grid

- **Scenario:** TS-012 – Pagination and infinite scroll navigation  
- **Test Cases:**  
  - TC-GRID-001 – Footer Blog Grid layout and pagination display  
  - TC-FLTR-002 – Filter persistence on multiple page navigation  
- **Bug Reports:**  
  - UI-GRID-022 – Blog Grid layout or pagination is broken  
  - UI-FLTR-093 – Filter reset or inconsistency after page change  

---

### 🔐 Email-based Flows

- **Scenario:** TS-015 – Email-based actions: restore password & email validation  
- **Test Cases:**  
  - TC-REG-002 – Registration with invalid email format  
- **Bug Reports:**  
  - FORM-VAL-063 – Email field validation missing or incorrect  

---

## ✅ How to Use This Matrix

- When you open a **Bug Report**, you can see which **Test Case** caught it and which **Scenario** it belongs to.  
- When you open a **Test Case**, you can trace it back to the **Scenario** and **Bug**.  
- This structure shows that your testing is:  
  - **Organized**  
  - **Traceable**  
  - **Business-focused**  
  - **Professional QA-level**

---


