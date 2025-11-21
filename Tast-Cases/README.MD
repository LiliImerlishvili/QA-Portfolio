# # 🧩 Test Cases (Based on Real Bug Reports)

This folder contains detailed, NDA-safe test cases designed directly from discovered defects in the e-commerce project.

Each test case:

- Is **linked to a specific Bug ID** from the Bug Reports folder  
- Follows a **full ISTQB-style structure** (Purpose, Preconditions, Steps, Expected Result)  
- Demonstrates **positive and negative coverage** for critical flows  
- Shows clear **traceability** between Test Cases and Bug Reports  

---

## 🔗 Traceability Overview (Test Cases ↔ Bug Reports)

| Test Case ID  | Title                                                   | Related Bug ID        | Module             | Type          | Status |
|---------------|---------------------------------------------------------|-----------------------|--------------------|---------------|--------|
| TC-LNG-001    | Verify language switch updates all UI components        | UI-LNG-002            | Localization       | Positive      | ❌ Failed |
| TC-LNG-002    | Verify banner behavior when translation is missing      | UI-LNG-002            | Localization       | Negative      | ❌ Failed |
| TC-BRND-001   | Brand page shows only selected brand products           | CAT-BRND-007          | Brands / Catalog   | Positive      | ❌ Failed |
| TC-BRND-002   | Brand URL parameters return correct product grid        | CAT-BRND-007          | Brands / Catalog   | Negative      | ❌ Failed |
| TC-GRID-001   | Footer blog grid layout and pagination display correctly| UI-GRID-022           | Blog / Footer      | UI/Functional | ❌ Failed |
| TC-RSP-001    | Category listing responsive layout at 991×1051          | UI-RSP-031            | Responsive Layout  | UI            | ❌ Failed |
| TC-PREV-001   | Close fullscreen image returns to same product          | UI-PREV-041           | Product Details    | Functional    | ❌ Failed |
| TC-SIM-001    | Similar products section shows relevant items           | UI-SIM-052            | Recommendations    | Functional    | ❌ Failed |
| TC-REG-001    | Register with valid email and data                      | FORM-VAL-063          | Registration       | Positive      | ✅ Passed |
| TC-REG-002    | Register with invalid email format                      | FORM-VAL-063          | Registration       | Negative      | ❌ Failed |
| TC-FAV-001    | Add product to favorites                                | UI-FAV-072            | Favorites          | Functional    | ❌ Failed |
| TC-FAV-002    | Remove product from favorites                           | UI-FAV-072            | Favorites          | Functional    | ⚠ Needs Retest |
| TC-SIZE-001   | Size dropdown shows only available sizes                | UI-SIZE-081           | Product Details    | Functional    | ❌ Failed |
| TC-SIZE-002   | Unavailable sizes are not selectable                    | UI-SIZE-081           | Product Details    | Negative      | ❌ Failed |
| TC-FLTR-001   | Category filter returns only matching products          | UI-FLTR-093           | Filters            | Positive      | ✅ Passed |
| TC-FLTR-002   | Filter stays consistent after multiple page navigation  | UI-FLTR-093           | Filters            | Regression    | ❌ Failed |
| TC-SZCH-001   | Size chart modal shows correct product size info        | UI-SIZECHART-104      | Size Guide         | Functional    | ❌ Failed |
| TC-SIMBR-001  | Similar products from same brand only                   | UI-SIMBRAND-118       | Recommendations    | Functional    | ❌ Failed |
| TC-DSN-001    | "Code & Delivery" block matches Figma design            | UI-DESIGNMATCH-132    | UI / Design        | UI/UX         | ❌ Failed |
| TC-ATTR-001   | Product attributes & tags match design and spec         | UI-COLORCAT-147       | Product Details    | UI/UX         | ❌ Failed |
| TC-TIT-001    | Product title layout matches Figma                      | UI-TITLE-159          | Product Details    | UI/UX         | ❌ Failed |

> All test cases are anonymized and do not expose real client names, URLs or internal identifiers.

---

## 🎯 Purpose

These test cases were created to:

- Validate **core e-commerce flows** (navigation, brands, product details, registration, recommendations)  
- Ensure that **reported bugs are reproducible using well-defined steps**  
- Provide **regression coverage** for fixed defects  
- Maintain **clear traceability** between requirements → test cases → bug reports  

---

## 🧰 Tools Used

- Qase / TestRail-style structure for test case design  
- Jira – linking Test Cases ↔ Bug Reports  
- Chrome DevTools – UI layout & network validation  
- Figma – visual comparison for design-related test cases  
- Desktop & Mobile browsers for responsive checks  

---
🔒 NDA Notice

All reports are anonymized. Real brand names, URLs, or sensitive client assets were removed or replaced according to NDA restrictions. Only testing logic and QA methodologies are shown.
