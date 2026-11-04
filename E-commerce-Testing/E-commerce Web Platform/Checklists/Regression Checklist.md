# E-commerce Regression Checklist

This checklist ensures regression coverage across core e-commerce functionalities, based on previously discovered defects and related test cases.

---

## Product Listing & Filters
- [ ] Category filter shows only relevant products  
- [ ] Filters persist after multiple page navigations  
- [ ] Product listing grid loads correct items  
- [ ] Pagination is displayed and works properly  
- [ ] URL parameters reflect correct category/brand  

---

## Brand & Category Behavior
- [ ] Selecting a brand shows only that brand's products  
- [ ] Brand URL parameters return matching products  
- [ ] No mixed brands appear after page navigation  
- [ ] Recommended products match selected brand  

---

## Product Details Page
- [ ] Product title matches design hierarchy  
- [ ] Size dropdown shows only available sizes  
- [ ] Unavailable sizes hidden/disabled  
- [ ] Product attributes match design spec  
- [ ] Color categories display correctly  
- [ ] Similar products match product type/category  
- [ ] Similar products from brand match selected brand  
- [ ] Size chart modal shows correct product info  
- [ ] Fullscreen preview returns to same product  

---

## Checkout & Cart
- [ ] Cart updates correctly  
- [ ] Checkout works with valid data  
- [ ] Checkout rejects invalid or incomplete data  

---

## Favorites / Wishlist
- [ ] Product can be added to Favorites  
- [ ] Product can be removed from Favorites  
- [ ] Favorites are saved after refresh/login  

---

## Localization
- [ ] KA → EN switches all UI elements  
- [ ] Banners and static components update correctly  
- [ ] No leftover untranslated text  
- [ ] Fallback language works properly  

---

## Responsive Behavior
- [ ] Grid layout is correct at 991×1051  
- [ ] No overlapping elements at mobile breakpoints  
- [ ] Product details readable on iOS/Android  
- [ ] Modals work on mobile  
- [ ] Similar products displayed correctly on mobile  

---

## UI/UX Consistency
- [ ] Section layouts match Figma  
- [ ] Code & Delivery block matches design  
- [ ] Product title block matches design  
- [ ] Attributes block matches design  
- [ ] All spacing and alignment consistent  
