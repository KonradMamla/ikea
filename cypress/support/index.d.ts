/// <reference types="cypress" />

declare namespace Cypress {
        interface Chainable {
          /**
           * Allure API for adding steps, attachments, and metadata.
           * Requires the Allure plugin to be configured.
           */
          allure(): AllureAPI;
        }
      
        interface AllureAPI {
          startStep(name: string): void;
          endStep(status?: 'passed' | 'failed' | 'broken' | 'canceled'): void;
          attach(name: string, content: string | Blob, type?: string): void;
        }
      }
      