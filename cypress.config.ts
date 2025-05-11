import { defineConfig } from 'cypress';
import allureWriter from '@shelex/cypress-allure-plugin/writer';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.ikea.com/pl/pl/',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',

    setupNodeEvents(on, config) {
      allureWriter(on, config);

      on('task', {
        log(message) {
          console.log(message);
          return null;
        }
      });

      return config;
    },

    viewportWidth: 1280,
    viewportHeight: 720,
    video: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 0,
      openMode: 0
    },
    env: {
      allure: true,
      allureResultsPath: 'allure-results'
    }
  }
});
