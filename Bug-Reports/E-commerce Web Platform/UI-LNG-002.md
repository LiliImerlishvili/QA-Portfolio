# UI-LNG-002 – Language Switch Does Not Update Service Info Banner

**Severity:** Medium  
**Reproducibility:** 100 percent  
**Environment:**  
- Device: iMac  
- OS: macOS Tahoe 26.0.1  
- Browser: Chrome 142.0.7444.60 (arm64)  
- Environment: Production  

---

## Summary  
Switching from KA to EN does not update the Service Info Banner. The banner text remains in Georgian.

---

## Steps to Reproduce  
1. Open homepage  
2. Change language from KA → EN  
3. Scroll to the Service Info Banner  
4. Observe language  

---

## Actual Result  
Banner text remains in Georgian.

---

## Expected Result  
Banner should fully update to English.

---

## Notes  
Likely missing localization mapping for this specific component.
