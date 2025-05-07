class CartPage {
  private SUMMARY_SECTION() {
    return cy.get('div:has(h3:contains("Podsumowanie"))');
  }
  
  private SUMMARY_PRICE() {
    return this.SUMMARY_SECTION().find('[data-testid="products-price"]');
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
}

export default new CartPage();
