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



---

### Notes
- Requirements follow NDA-safe structure and do not reveal confidential system details.  
- Requirements, Test Cases, Test Scenarios, and Bugs use consistent ID format.
- Table is designed for portfolio-quality traceability demonstration.
