import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.ikea.com/pl/pl/',
    specPattern: 'cypress/e2e/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',

    async setupNodeEvents(on, config) {
      const allureWriter = await import('@shelex/cypress-allure-plugin/writer');
      allureWriter.default(on, config);

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
    video: true,
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      allure: true,
      allureResultsPath: 'allure-results'
    }
  }
});
