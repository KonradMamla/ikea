/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    allure(): AllureAPI;
    setConsentCookies(): Chainable<void>;
    mockCartWithOneProduct(): Chainable<void>;
    mockRemoveItemFromCart(): Chainable<void>;
    mockCartEmpty(): Chainable<void>;
  }

  interface AllureAPI {
    startStep(name: string): void;
    endStep(status?: 'passed' | 'failed' | 'broken' | 'canceled'): void;
    attach(name: string, content: string | Blob, type?: string): void;
  }
}