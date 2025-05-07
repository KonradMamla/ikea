# [Cart and Checkout] (AC: Update product quantity) Change product quantity in the cart

**Test ID:** TC-CART-004  
**Priority:** Medium  
**Labels:** cart, quantity
**Status:** Not Automated  

---

### Description  
This test verifies that the user can change the quantity of a product directly in the cart and that both the quantity and total price are updated accordingly.

---

### Preconditions  
- A product has already been added to the cart  
- Cookie consent is accepted (`consent.json`)  
- User is **not logged in**

---

### Test Data  

| Field         | Value      |
|---------------|------------|
| Product ID    | s09545271  |
| Product Name  | VIMLE      |
| Initial Qty   | 1          |
| Updated Qty   | 2          |

---

### Steps  

1. **Go** to the IKEA homepage  
   - **Expected result:** Homepage loads correctly  

2. **Navigate** to the cart  
   - **Expected result:** Cart page is displayed with the correct product  

3. **Verify** current product quantity is 1  
   - **Expected result:** Quantity input shows "1"  

4. **Click** the “+” (plus) button to increase quantity  
   - **Expected result:** Quantity is updated to "2"  

5. **Verify** that total product price is updated
   - **Expected result:** Price shown in summary matches `unitPrice * quantity`  

---