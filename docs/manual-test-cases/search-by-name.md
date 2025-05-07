# [Product Search] (AC: Search product) Searching for a product by name

**Test ID:** TC-SEARCH-005  
**Priority:** Medium  
**Labels:** search, product
**Status:** Not Automated  

---

### Description  
This test verifies that when the user searches for a product by name (e.g., "KALLAX"), the returned results contain only products whose names match the search term.

---

### Preconditions  
- User is not logged in  
- Cookie consent is accepted (`consent.json`)  
- The searched product exists in the IKEA database  

---

### Test Data  

| Field        | Value    |
|--------------|----------|
| Product Name | KALLAX   |

---

### Steps  

1. **Open** the IKEA homepage  
   - **Expected result:** Homepage loads correctly  

2. **Enter** `KALLAX` into the search bar and press Enter  
   - **Expected result:** Search results are displayed  

3. **Verify** that all listed products contain the name `KALLAX`  
   - **Expected result:** Each product result includes the name `KALLAX` in its title

---