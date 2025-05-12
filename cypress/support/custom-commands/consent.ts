Cypress.Commands.add('setConsentCookies', () => {
        const cookieEnv = Cypress.env('CONSENT_COOKIE_JSON');
      
        if (!cookieEnv) {
          throw new Error('CONSENT_COOKIE_JSON env var is missing');
        }
      
        let cookies: Record<string, string>;
      
        try {
          cookies = typeof cookieEnv === 'string' ? JSON.parse(cookieEnv) : cookieEnv;
        } catch (e) {
          throw new Error('CONSENT_COOKIE_JSON must be a valid JSON string or object');
        }
      
        Object.entries(cookies).forEach(([name, value]) => {
          cy.setCookie(name, value);
        });
      });