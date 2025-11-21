# TC-LNG-001 – Verify Language Switch Updates All UI Components (Positive)

**Purpose:**  
To verify that switching the website language from KA → EN updates all visible UI components, including banners and text blocks.

**Related Bug:** UI-LNG-002  
**Module / Feature:** Localization  
**Priority:** High  

**Preconditions:**  
- Homepage is accessible.  
- Language switcher is visible in the header.  
- User is not using cached version (hard refresh done).

**Test Data:**  
- N/A

**Environment:**  
- Device: iMac  
- OS: macOS Tahoe 26.1  
- Browser: Chrome 142.x (arm64)  

---

### Steps:
1. Open the homepage.  
2. From the language selector, choose **English**.  
3. Wait for the page to reload completely.  
4. Scroll through the entire page.  
5. Observe all visible text sections, labels, and banners, including **Service Info Banner**.

---

### Expected Result:
- All UI texts are displayed in English.  
- Service Info Banner text is also displayed in English.  
- No Georgian text remains after language switch.

---

### Status:
❌ Failed
