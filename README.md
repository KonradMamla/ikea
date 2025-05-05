
# Cypress IKEA Automation Tests

This repository contains Cypress test scripts for automating key functionalities of the IKEA e-commerce website [IKEA](https://www.ikea.com/pl/pl/).  
The project was created using the **BDD (Behavior-Driven Development)** approach. Test scenarios are written in a manner that describes the system's behavior from the **end user's perspective**.

---

## Table of Contents

- [Prerequisites](#prerequisites)  
- [Getting Started](#getting-started)  
- [Running Tests](#running-tests)  
- [Test Scenarios](#test-scenarios)  
- [Authors](#authors)  
- [License](#license)  

---

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed:

- **[Node.js](https://nodejs.org/)**: Make sure Node.js is installed on your system.  
- **Dependencies:** Install project dependencies using:  
  ```bash
  npm install
  ```
- **Cypress:** Ensure Cypress is properly installed in your environment.

---

## Getting Started

1. **Clone this repository** to your local machine:  
   ```bash
   git clone https://github.com/your-username/cypress-ikea-automation.git
   ```
2. **Navigate to the project directory:**  
   ```bash
   cd cypress-ikea-automation
   ```
3. **Install dependencies:**  
   ```bash
   npm install
   ```

---

## Running Tests

To execute the Cypress tests:

1. Open your terminal.  
2. Navigate to the project directory.  
3. Run Cypress Test Runner:  
   ```bash
   npx cypress open
   ```
4. Choose the test you want to run from the Cypress Test Runner UI.

Alternatively, run tests in headless mode:  
```bash
npx cypress run
```

---

## Test Scenarios

### Cart and Checkout

1. **Adding a product to the cart**  
   - **Action:** The user searches for a product and adds it to the cart.  
   - **Verification:** The product appears in the cart with the correct name, price, and quantity.  

2. **Removing a product from the cart**  
   - **Action:** The user removes a product from the cart.  
   - **Verification:** The cart becomes empty.  

3. **Placing an order**  
   - **Action:** The user completes the order process (login, address, payment).  
   - **Verification:** The order is successfully placed.  

4. **Changing product quantity in the cart**  
   - **Action:** The user updates the product quantity in the cart.  
   - **Verification:** The price and quantity are updated correctly.  

### Product Search

5. **Searching for a product by name**  
   - **Action:** The user searches for a specific product (e.g., "KALLAX").  
   - **Verification:** The search results include the specified product.  

6. **Filtering search results**  
   - **Action:** The user applies filters (e.g., price, color, category).  
   - **Verification:** The search results match the selected filters.  

7. **Sorting search results**  
   - **Action:** The user sorts products by price (ascending/descending).  
   - **Verification:** The products are displayed in the correct order.  

### Site Navigation

8. **Verifying the navigation menu**  
   - **Action:** The user clicks on different categories in the navigation menu.  
   - **Verification:** The user is redirected to the correct category pages.  

9. **Exploring the inspiration section**  
   - **Action:** The user navigates to the inspiration section.  
   - **Verification:** The page displays relevant articles and images.  

### Forms and Validation

10. **Validating required fields in the registration form**  
    - **Action:** The user leaves required fields empty in the registration form.  
    - **Verification:** Validation messages are displayed for the missing fields.  

11. **Validating email format**  
    - **Action:** The user enters an invalid email format.  
    - **Verification:** An error message indicates an invalid email format.  

### Performance Tests

12. **Homepage load time**  
    - **Action:** Measure the time it takes for the homepage to fully load.  
    - **Verification:** The page loads within an acceptable threshold (e.g., 3 seconds).  

---

## Authors

- **Konrad Mamla** – [LinkedIn](https://www.linkedin.com/in/konrad-mamla)

---

## License

This project is licensed under the **MIT License** – see the [LICENSE.md](LICENSE.md) file for details.

---

## Future Improvements

- Integration with **CI/CD pipeline (e.g., Jenkins)** for automated test execution.  
- Enhanced **Allure reporting** for better visualization of test results.  
- Expansion of test coverage for **user authentication** and **payment gateways**.

---