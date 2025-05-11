# Cypress IKEA Automation Tests

This repository contains Cypress test scripts for automating key functionalities of the IKEA e-commerce website [IKEA](https://www.ikea.com/pl/pl/).

The project is built using **[Cypress](https://www.cypress.io/)** with **[TypeScript](https://www.typescriptlang.org/)**, following a clean and maintainable structure based on the **Page Object Model (POM)**.  
Test scenarios are written in a clear, action-driven style that simulates real **end-user interactions**.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Consent Cookie Setup](#consent-cookie-setup)
- [Test Stabilization – Mocking API](#test-stabilization--mocking-api)
- [Running Tests](#running-tests)
- [Test Scenarios](#test-scenarios)
- [Manual Test Cases](#manual-test-cases)
- [Allure Test Reports](#allure-test-reports)
- [Future Improvements](#future-improvements)
- [Authors](#authors)
- [License](#license)

---

## Prerequisites

Before running the tests, ensure you have the following prerequisites installed:

- **[Node.js](https://nodejs.org/)** (v16 or higher recommended): Make sure Node.js is installed on your system.
- **Dependencies:** Install project dependencies using:
  ```bash
  npm install
  ```
- **Cypress:** Ensure Cypress is included in the project's `devDependencies` and will be installed with the above command.  
  **Minimum recommended version:** Cypress v12.x or higher

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

## Consent Cookie Setup

Before running the tests, you need to create the file:

`cypress/fixtures/consent.json`

With the following content:

```json
{
  "OptanonConsent": "YOUR_CONSENT_COOKIE_VALUE",
  "OptanonAlertBoxClosed": "true",
  "ikea_cookieconsent_pl": "PL"
}
```

This file is required to bypass the cookie banner and run tests without manual interaction.

### How to get the `OptanonConsent` value?

1. Open [https://www.ikea.com/pl/pl/](https://www.ikea.com/pl/pl/) in your browser.
2. Open Developer Tools (`F12` or `Cmd + Option + I` on Mac).
3. Go to the **Application** tab.
4. In the sidebar, select **Cookies > https://www.ikea.com**.
5. Locate the cookie named **OptanonConsent**.
6. Copy its **entire value** and paste it into your `consent.json` file.

---

## Test stabilization – mocking API

To ensure **reliable, fast, and isolated tests**, key cart-related scenarios are stabilized using **API mocking**.

### Added custom Cypress commands

| Command                    | Description                                               |
| -------------------------- | --------------------------------------------------------- |
| `mockCartWithOneProduct()` | Returns a cart with one predefined product                |
| `mockRemoveItemFromCart()` | Simulates a successful product removal (`DELETE` request) |
| `mockCartEmpty()`          | Returns an empty cart after item removal                  |

### Purpose

- Decouple test from real backend responses
- Ensure deterministic test behavior regardless of API/server state
- Speed up execution and eliminate flakiness in cart test `TC-CART-002`

### Structure

- **Mocks**: [`/cypress/fixtures/`](./cypress/fixtures/)
- **Commands**: [`/cypress/support/commands/`](./cypress/support/commands/)

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

   - **Action:** The user completes the order process as a guest.
   - **Verification:** The order is successfully placed.

4. **Changing product quantity in the cart**
   - **Action:** The user updates the product quantity in the cart.
   - **Verification:** The price and quantity are updated correctly.

### Product Search

5. **Searching for a product by name**
   - **Action:** The user searches for a specific product (e.g., "KALLAX").
   - **Verification:** The search results list includes only the specified product name.

### Forms and Validation

6. **Validating required fields in the registration form**
   - **Action:** The user leaves required fields empty in the registration form.
   - **Verification:** Validation messages are displayed for the missing fields.

### Performance Tests

7. **Cart price update time after quantity change**
   - **Action:** Measure how quickly the total price in the cart updates after changing the product quantity.
   - **Verification:** The price and quantity update within an acceptable threshold (e.g., 1500 ms).

---

## Manual Test Cases

Manual test cases covering functional flows are available in:  
[`docs/manual-test-cases/index.md`](./docs/manual-test-cases/index.md)

Includes:

- Detailed step-by-step flows
- Preconditions and test data
- Expected results per step
- Status (e.g., automated / not automated)

---

## Allure Test Reports

This project uses [Allure](https://docs.qameta.io/allure/) to generate advanced, interactive test reports for Cypress.

### Features

- Attachments: automatic screenshots on failure
- Step-by-step logging via `cy.allure()`
- Execution history and trend charts
- Categorization by severity, tags, and status

### How to Use

1. **Run tests with Allure:**

   ```bash
   npm run test:allure
   ```

Generate and open the report:

```bash
npm run report
```

### Output folders

- `allure-results/` – raw test data + screenshots
- `allure-report/` – generated HTML report

### Execution History

- Report history is preserved between test runs
- Trend charts (flaky, broken, passed) are updated automatically
- History is stored by copying `/allure-report/history` into `/allure-results` after each test run

> Allure setup is already included in the repo: plugin config, scripts, and environment metadata.

---

## Future Improvements

- **CI/CD Integration**  
  Integrate the Cypress test suite with a CI/CD pipeline (e.g., GitHub Actions or Jenkins) to enable automated test execution on pull requests, merges, and deployments.

- **Expanded Test Coverage**  
  Include additional scenarios for:

  - **User authentication flows**
  - **Full checkout paths** (e.g., delivery, store pickup)
  - **Input validation and negative cases**

- **API-Level Testing**  
  Add API tests (e.g., search, cart, order endpoints) to validate backend logic and reduce dependency on UI for critical paths.

  - **Improved Test Architecture**
  - Refactor Page Object Model (POM) to improve modularity and reusability.
  - Extract common logic into custom Cypress commands.
  - Ensure clean structure and maintainable code through separation of concerns.

---

## Authors

- **Konrad Mamla** – [LinkedIn](https://www.linkedin.com/in/konrad-mamla)

---

## License

This project is licensed under the **MIT License** – see the [LICENSE.md](LICENSE.md) file for details.

---
