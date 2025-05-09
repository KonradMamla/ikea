Cypress.Commands.add('mockCartWithOneProduct', () => {
  cy.intercept(
    'GET',
    '**/api/v1/pl?fetchItemInfo=true&fetchCartContext=true&fetchIndicativeAvailability=true&fetchPrice=true&fetchServices=true&shoppingProfile=ONLINE&group=DEFAULT',
    { fixture: 'mock_cart_with_one_product.json' }
  ).as('mockCart');
});

Cypress.Commands.add('mockRemoveItemFromCart', () => {
  cy.intercept('DELETE', '**/items?itemNumbers=*', {
    statusCode: 200,
    body: { success: true }
  }).as('removeItem');
});

Cypress.Commands.add('mockCartEmpty', () => {
  cy.intercept(
    'GET',
    '**/api/v1/pl?fetchItemInfo=true&fetchCartContext=true&fetchIndicativeAvailability=true&fetchPrice=true&fetchServices=true&shoppingProfile=ONLINE&group=DEFAULT',
    { fixture: 'mock_cart_empty.json' }
  ).as('mockCartEmpty');
});
