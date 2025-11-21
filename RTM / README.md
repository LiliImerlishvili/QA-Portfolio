# 🔗 RTM – Requirements Traceability Matrix

This folder contains the **Traceability Matrix** that links high-level requirements with related **Test Scenarios**, **Test Cases**, and **Bug Reports**.

The matrix provides a clear view of:

- Which requirements are tested  
- Which test cases validate each scenario  
- Which defects were discovered during testing  
- Coverage completeness and potential risk areas  

---

## 🧩 Example Mapping

| Scenario ID | Scenario Description                                 | Test Cases                                   | Related Bug Reports                   |
|------------|--------------------------------------------------------|-----------------------------------------------|----------------------------------------|
| TS-001     | User registration and account creation                 | TC-REG-001, TC-REG-002                        | FORM-VAL-063                           |
| TS-002     | Category browsing and product filtering                | TC-FLTR-001, TC-FLTR-002                      | UI-FLTR-093                            |
| TS-004     | Language switch from KA → EN                           | TC-LNG-001, TC-LNG-002                        | UI-LNG-002                             |
| TS-006     | Product details: sizes, attributes, size chart         | TC-SIZE-001, TC-SIZE-002, TC-SZCH-001, TC-ATTR-001 | UI-SIZE-081, UI-SIZECHART-104, UI-COLORCAT-147 |
| TS-007     | Similar & recommended product relevance                | TC-SIM-001, TC-SIMBR-001                      | UI-SIM-052, UI-SIMBRAND-118            |

> For the complete matrix, refer to **RTM.md** in this folder.

---

## 🎯 Purpose

The Traceability Matrix helps to:

- Ensure all **business requirements** are covered by test scenarios and cases  
- Provide clear linkage between **Scenarios → Test Cases → Bug Reports**  
- Identify untested or high-risk areas early  
- Improve transparency during test execution and sprint planning  
- Demonstrate full testing coverage in a clean and structured format  

---

## 🛠 Tools Used

- **Jira** – Linking user stories and bug reports  
- **Qase / TestRail** – Managing structured test cases and scenarios  
- **Google Sheets / Markdown** – Documentation and RTM mapping  
- **GitHub** – Organizing RTM alongside Bug Reports, Test Cases, and Checklists  

---

## 🧾 Summary

The RTM shows that testing was performed in a **systematic, requirement-driven way**, not just through ad-hoc execution.  
It provides a complete trace of:

**Requirement → Scenario → Test Case → Bug Report**

This format is highly valued in professional QA environments and gives interviewers a clear picture of your structured testing approach.

---

If you want, I can also:

✅ Generate the **full RTM.md matrix table  
✅ Link every scenario/test case based on your actual bugs  
✅ Update your folder structure with ready-to-paste files  
---
🔒 NDA Notice

All reports are anonymized. Real brand names, URLs, or sensitive client assets were removed or replaced according to NDA restrictions. Only testing logic and QA methodologies are shown.
