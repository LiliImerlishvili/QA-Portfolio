# TC-LNG-002 – Verify Banner Behavior When Translation Key Is Missing (Negative)

**Purpose:**  
To check system behavior when a specific UI component (Service Info Banner) has no translation configured for EN language.

**Related Bug:** UI-LNG-002  
**Module / Feature:** Localization  
**Priority:** Medium  

**Preconditions:**  
- Language switcher is functioning for most components.  

**Test Data:**  
- N/A

**Environment:**  
Same as TC-LNG-001

---

### Steps:
1. Switch from KA → EN using the language switcher.  
2. Reload the page using browser **hard refresh**.  
3. Scroll to the Service Info Banner.  
4. Compare its language with the rest of the UI.

---

### Expected Result:
- If translation key is missing, banner should display:  
  - a safe default language (EN), or  
  - a neutral placeholder text.  
- It must **not** stay in Georgian while the rest of the UI is in English.

---

### Status:
❌ Failed
