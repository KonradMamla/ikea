class ProductPage {
  private SEARCH_INPUT() {
    return cy.get('#ikea-search-input');
  }

  private IKEA_LOGO_BUTTON() {
    return cy.get('a[data-tracking-label="ikea-logo"]');
  }

  private PRODUCT_LIST_SECTION() {
    return cy.get('#product-list');
  }

  //was replaced with PRODUCT_LINK_BY_ID
  private PRODUCT_ID(productID: string) {
    return this.PRODUCT_LIST_SECTION().find(`[data-product-number="${productID}"]`);
  }

  private PRODUCT_LINK_BY_ID(productID: string) {
    return this.PRODUCT_LIST_SECTION().find(
      `[data-product-number="${productID}"] a.plp-product__image-link`
    );
  }

  private PRODUCT_NAME(productName: string) {
    return cy.get('span.plp-price-module__product-name').contains(productName);
  }

  private PRODUCT_DESCRIPTION(productDescription: string) {
    return cy.get('span.plp-price-module__description').contains(productDescription);
  }

  private ADD_TO_CART_BUTTON() {
    return cy.get('button[aria-label="Dodaj do koszyka"]').first();
  }

  private GO_TO_CART_BUTTON() {
    return cy.get('button[aria-label="Przejdź do koszyka"]');
  }

  goToProductPage() {
    cy.visit('/');
    this.IKEA_LOGO_BUTTON().should('exist');
    return this;
  }

  searchProductByName(productName: string) {
    cy.allure().startStep(`Search for product by name : ${productName}`);
    this.SEARCH_INPUT().type(`${productName}{enter}`);
    cy.allure().endStep();
    return this;
  }

  searchProductByID(productID: string) {
    cy.allure().startStep(`Search for product by reference number: ${productID}`);
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

  selectProductByID(productID: string) {
    cy.allure().startStep(`Select product by ID: ${productID}`);
    this.PRODUCT_LINK_BY_ID(productID)
      .scrollIntoView()
      .should('be.visible')
      .click();
    cy.allure().endStep();
    return this;
  }

  verifyOnlyProductsWithIDAreVisible(productID: string) {
    cy.allure().startStep(`Verify that only products with ID: ${productID} are visible`);
    this.PRODUCT_LIST_SECTION()
      .find(`[data-product-number]`)
      .should('have.length.greaterThan', 0)
      .each(($el) => {
        expect($el.attr('data-product-number')).to.eq(productID);
      });
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