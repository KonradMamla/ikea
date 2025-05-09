Cypress.Commands.add('setConsentCookies', () => {
        cy.fixture('consent').then((cookies: Record<string, string>) => {
                Object.entries(cookies).forEach(([name, value]) => {
                        cy.setCookie(name, value);
                });
        });
});