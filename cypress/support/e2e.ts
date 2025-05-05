import './commands';
import '@shelex/cypress-allure-plugin';

Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("behtar is not a constructor")) {
            return false;
        }
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes("net::ERR_EMPTY_RESPONSE")) {
            return false;
        }
    });