## [Cart and Checkout] (AC: Remove product from cart) Remove product from cart

**Test ID:** TC-CART-002  
**Priority:** critical  
**Labels:** cart, checkout  
**Status:** Automated  

---

### Description  
This test verifies that a user can remove a product from the cart and that the cart reflects an empty state afterward.

---

### Preconditions  
- User is not logged in  
- Cookie consent has already been accepted (see `consent.json`)  
- The cart contains one product (mocked or added beforehand)

---

### Test Data  

| Field        | Value     |
|--------------|-----------|
| Product ID   | 19241207  |
| Product Name | SONGESAND |

---

### Steps  

1. **Open** the IKEA cart page (`/shoppingcart/`)  
   - **Expected result:** Cart page loads correctly with 1 product  

2. **Click** the **"Trash"** button next to the product  
   - **Expected result:** Product is removed from the cart  

3. **Verify** the cart is empty  
   - **Expected result:** Cart displays an empty state  

---
