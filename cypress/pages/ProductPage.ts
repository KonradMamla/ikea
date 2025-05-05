class ProductPage {
  private SEARCH_INPUT() {
    return cy.get('#ikea-search-input');
  }

  private ACCEPT_COOKIES_BUTTON() {
    return cy.get('#onetrust-accept-btn-handler');
  }

  private IKEA_LOGO_BUTTON() {
    return cy.get('[aria-label="Logotyp IKEA, przejdź do strony startowej"]');
  }

  private PRODUCT_ID(productID: string) {
    return cy.get(`[data-product-id="${productID}"]`);
  }

  private PRODUCT_NAME(productName: string) {
    return cy.get('span.plp-price-module__product-name').contains(productName);
  }

  private PRODUCT_DESCRIPTION(productDescription: string) {
    return cy
      .get('span.plp-price-module__description')
      .contains(productDescription);
  }

  private ADD_TO_CART_BUTTON() {
    return cy.get('button[aria-label="Dodaj do koszyka"]').first();
  }

  private GO_TO_CART_BUTTON() {
    return cy.get('button[aria-label="Przejdź do koszyka"]');
  }

  // Funkcje
  goToProductPage() {
    cy.visit('/');
    this.IKEA_LOGO_BUTTON().should('exist');
    return this;
  }

  clickAcceptCookiesButton() {
    cy.allure().startStep(`Click on the "Accept cookies" button`);
    this.ACCEPT_COOKIES_BUTTON().click();
    cy.allure().endStep();
    return this;
  }

  searchProductByName(productName: string) {
    cy.allure().startStep(`Search for product by name : ${productName}`);
    this.SEARCH_INPUT().type(`${productName}{enter}`);
    cy.allure().endStep();
    return this;
  }

  searchProductByID(productID: string) {
    cy.allure().startStep(
      `Search for product by reference number: ${productID}`,
    );
    this.SEARCH_INPUT().type(`${productID}{enter}`);
    cy.allure().endStep();
    return this;
  }

  selectProductByName(productName: string) {
    cy.allure().startStep(`Select product by name: ${productName}`);

    this.PRODUCT_NAME(productName).should('be.visible').click();

    cy.allure().endStep();
    return this;
  }

  verifyOnlyProductsWithIDAreVisible(productID: string) {
    cy.allure().startStep(
      `Verify only products with ID: ${productID} are visible`,
    );

    cy.get('[data-product-id]').each(($el) => {
      cy.wrap($el).should('have.attr', 'data-product-id', productID);
    });

    cy.get(`[data-product-id]:not([data-product-id="${productID}"])`).should(
      'not.exist',
    );

    cy.allure().endStep();
    return this;
  }

  clickAddToCartButton() {
    cy.allure().startStep('Click the "Add to Cart" button');

    this.ADD_TO_CART_BUTTON().should('be.visible').click({ force: true });

    cy.allure().endStep();
    return this;
  }

  clickGoToCartButton() {
    cy.allure().startStep('Click the "Go to Cart" button');

    this.GO_TO_CART_BUTTON().should('be.visible').click({ force: true });

    cy.allure().endStep();
    return this;
  }
}

export default new ProductPage();
