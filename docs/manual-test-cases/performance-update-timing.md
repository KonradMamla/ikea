# [Performance] (AC: Update quantity) Price updates after changing quantity in the cart

**Test ID:** TC-PERF-007  
**Priority:** Medium  
**Labels:** cart, quantity, performance  
**Status:** Not Automated  

---

### Description  
This test checks how quickly the cart summary updates after changing the quantity of a product already in the cart. The system should reflect the new quantity and recalculate the price within an acceptable time.

---

### Preconditions  
- User is not logged in  
- Cookie consent has already been accepted (see `consent.json`)  
- The product is already added to the cart  

---

### Test Data  

| Field         | Value       |
|---------------|-------------|
| Product ID    | s09545271   |
| Product Name  | VIMLE       |
| New Quantity  | 2           |
| Max Wait Time | 1500 ms     |

---

### Steps  

1. **Open** the cart page  
   - **Expected result:** Cart with one item is displayed  

2. **Change** quantity of product `s09545271` from `1` to `2`  
   - **Expected result:** Quantity input updates  

3. **Start** timing when change is made  
   - **Expected result:** Timer starts counting  

4. **Observe** when the total price updates  
   - **Expected result:** Summary updates

5. **Verify** that the update occurred within 1500 ms  
   - **Expected result:** Price recalculation finished in time  

---