import './commands';
import '@shelex/cypress-allure-plugin';

Cypress.Screenshot.defaults({
  capture: 'runner'
});

Cypress.on('fail', (error, runnable) => {
  cy.screenshot('fail-screenshot');
  throw error;
});
