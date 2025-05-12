Cypress.Commands.add('setConsentCookies', () => {
  const cookieJson = Cypress.env('CONSENT_COOKIE_JSON');
  if (!cookieJson) {
    throw new Error('CONSENT_COOKIE_JSON env var is missing');
  }

  const cookies: Record<string, string> = JSON.parse(cookieJson);
  Object.entries(cookies).forEach(([name, value]) => {
    cy.setCookie(name, value);
  });
});