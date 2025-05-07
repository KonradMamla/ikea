# [Cart and Checkout] (AC: Place order) Complete order placement as a guest user

**Test ID:** TC-CART-003  
**Priority:** Critical  
**Labels:** cart, checkout, order
**Status:** Not Automated  

---

### Description  
This test verifies that a guest user can complete the full order placement process for a product already added to the cart. The flow includes proceeding to checkout, selecting delivery or pickup, providing customer and billing details, and confirming the order.

---

### Preconditions  
- A product is already in the cart  
- Cookie consent has already been accepted (`consent.json`)  
- User is **not logged in**

---

### Test Data  

| Field            | Value         |
|------------------|---------------|
| Product ID       | s09545271     |
| Product Name     | VIMLE         |
| Postal Code      | 01-234        |
| Email            | test@example.com |
| Phone Number     | 123456789     |
| First Name       | Jan           |
| Last Name        | Kowalski      |
| Street & Number  | Testowa 10    |
| City             | Warszawa      |

---

### Steps  

1. **Open** the IKEA homepage  
   - **Expected result:** Homepage loads correctly  

2. **Go** to the cart page  
   - **Expected result:** Product is visible in the cart  

3. **Click** the “Dalej” button
   - **Expected result:** on the right side the window "Jak chcesz kontynuować zakupy?" appears

4. **Click** the “Kontynuuj jako gość”  button
   - **Expected result:** User is redirected to the "Dostawa lub odbiór" form  

5. **Enter** valid postal code  
   - **Expected result:** Pickup options are shown  

6. **Select** “Odbiór w sklepie lub skrytce IKEA” (Pickup option)  
   - **Expected result:** Pickup method is selected and visible  

7. **Verify** order summary (product + delivery cost = total order value)  
   - **Expected result:** Values match expected price  

8. **Click** “Dalej” to proceed to personal details form  
   - **Expected result:** User is redirected to "Szczegóły" form  

9. **Fill in** customer information (email, phone, billing address)  
   - **Expected result:** Form is correctly filled  

10. **Verify** the final summary  
    - **Expected result:** Order value remains unchanged  

11. **Click** “Dalej” to proceed to final step  
    - **Expected result:** Summary of the order is displayed correctly  

---