# [Cart and Checkout] (AC: Add product to cart) Add product to cart by productID

**Test ID:** TC-CART-001
**Priority:** High  
**Labels:** cart, checkout, automated  
**Status:** Automated  

---

### Description  
This test verifies that a user can search for a product by its product ID, open the product page, add it to the cart, and see the correct product and price in the cart summary.

---

### Preconditions  
- User is not logged in  
- Cookie consent has already been accepted (see `consent.json`)  
- The product exists and is available  

---

### Test Data  

| Field        | Value         |
|--------------|---------------|
| Product ID   | s09545271     |
| Product Name | VIMLE         |

---

### Steps  

1. **Open** the IKEA homepage  
   - **Expected result:** Homepage loads correctly  

2. **Search** for product by ID: `s09545271`  
   - **Expected result:** Only product `s09545271` is listed in the results  

3. **Click** on the product card to open product detail page  
   - **Expected result:** Product page for `VIMLE` loads  

4. **Click** “Add to Cart” button  
   - **Expected result:** Product is added to cart  

5. **Click** “Go to Cart” button  
   - **Expected result:** Cart page is displayed  

6. **Verify** product in cart matches ID and price  
   - **Expected result:** Product `s09545271` is listed with price 

---