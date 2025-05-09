class CartPage {
  private SUMMARY_SECTION() {
    return cy.contains('h3', 'Podsumowanie').parents('div').eq(2);
  }

  private SUMMARY_PRICE() {
    return this.SUMMARY_SECTION().find('[data-testid="products-price"]');
  }

  private CART_PRODUCTS_LIST() {
    return cy.get('[data-testid="product_image"]').first().parents('ul');
  }

  private EMPTY_CART_CONTAINER() {
    return cy.get('#one-checkout');
  }

  goToCartPage() {
    cy.visit('/shoppingcart/');
    cy.get('h1').should('contain.text', 'Koszyk');
    return this;
  }

  verifyOnlyProductWithIDIsVisible(productID: string) {
    cy.allure().startStep(`Verify only product with ID: ${productID} is visible`);

    const productSelector = `a[data-testid="product_image"][href*="/pl/pl/p/-${productID}"]`;
    const allProductsSelector = `a[data-testid="product_image"][href*="/pl/pl/p/-"]`;

    cy.get(productSelector).should('be.visible');
    cy.get(allProductsSelector).not(productSelector).should('not.exist');
    cy.allure().endStep();
    return this;
  }

  verifySummaryPrice(expectedPrice: string) {
    cy.allure().startStep(`Verify the summary price is: ${expectedPrice}`);
    this.SUMMARY_PRICE()
      .should('be.visible')
      .and('contain.text', expectedPrice);
    cy.allure().endStep();
    return this;
  }

  verifyCartIsEmpty() {
    cy.allure().startStep('Verify that the cart is empty');
    this.EMPTY_CART_CONTAINER()
      .find('h1')
      .should('contain.text', 'Twój koszyk jest pusty');
    cy.allure().endStep();
    return this;
  }

  verifyCartIsNotEmpty() {
    cy.allure().startStep('Verify that the cart product list is not empty');
    this.CART_PRODUCTS_LIST()
      .children('li')
      .should('exist');
    cy.allure().endStep();
    return this;
  }

  removeProductFromCartByName(productName: string) {
    cy.allure().startStep(`Remove product "${productName}" from the cart`);
    cy.get(`button[aria-label="Usuń ${productName} z koszyka"]`).click();
    cy.allure().endStep();
    return this;
  }
}

export default new CartPage();
