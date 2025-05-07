# [Registration] (AC: Required field validation) Validating required fields in the registration form

**Test ID:** TC-REG-006  
**Priority:** High  
**Labels:** registration, validation, negative  
**Status:** Not Automated  

---

### Description  
This test verifies that proper validation messages are shown when a user tries to submit the registration form without filling in required fields.

---

### Preconditions  
- User is not logged in  
- Cookie consent has already been accepted (see `consent.json`)  
- User is on the registration form page  

---

### Test Data  

| Field           | Value    |
|----------------|----------|
| Email           | *empty*  |
| Password        | *empty*  |
| First Name      | *empty*  |
| Last Name       | *empty*  |
| Accept Terms    | Unchecked |

---

### Steps  

1. **Open** the registration page  
   - **Expected result:** The registration form is displayed  

2. **Leave** all required fields empty  
   - **Expected result:** No input is provided  

3. **Click** the "Register" or "Submit" button  
   - **Expected result:**  
     - Validation messages are displayed for all required fields  
     - Input fields are marked as invalid  
     - Form is not submitted  

---