## [Cart and Checkout] (AC: Remove product from cart) Remove product from cart

**Test ID:** TC-CART-002  
**Priority:** critical  
**Labels:** cart, checkout  
**Status:** Not Automated  

---

### Description  
This test verifies that a user can remove a product from the cart, and that the cart reflects an empty state afterward.
---

### Preconditions  
- User is not logged in  
- Cookie consent has already been accepted (see `consent.json`)  
- The cart contains one product (added beforehand)

---

### Test Data  

| Field        | Value     |
|--------------|-----------|
| Product ID   | s09545271 |
| Product Name | VIMLE     |

---

### Steps  

1. **Open** the IKEA homepage  
   - **Expected result:** Homepage loads correctly  

2. **Click** the **"Cart"** icon or go directly to the cart page  
   - **Expected result:** Cart page displays with 1 product  

3. **Click** the **"Trash"** button next to the product  
   - **Expected result:** Product is removed from the cart  

4. **Verify** the cart is empty  
   - **Expected result:** Cart displays an empty state 

---