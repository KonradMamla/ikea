class CartPage {
  private SUMMARY_SECTION() {
    return cy.get('div:has(h3:contains("Podsumowanie"))');
  }
  private SUMMARY_PRICE() {
    return this.SUMMARY_SECTION().find('[data-testid="products-price"]');
  }

  verifyOnlyProductWithIDIsVisible(productID: string) {
    cy.allure().startStep(
      `Verify only product with ID: ${productID.toLowerCase()} is visible`,
    );

    const normalizedID = productID.toLowerCase();

    cy.get(`a[href*="/pl/pl/p/-${normalizedID}"]`)
      .should('exist')
      .and('be.visible');

    cy.get(`a[href*="/pl/pl/p/-"]`)
      .filter(`:not([href*="${normalizedID}"])`)
      .should('not.exist');

    cy.allure().endStep();
    return this;
  }

  verifySummaryPrice(expectedPrice: string) {
    cy.allure().startStep(
      `Verify the price in the summary is: ${expectedPrice}`,
    );

    this.SUMMARY_PRICE().and('be.visible').and('contain.text', expectedPrice);

    cy.allure().endStep();
    return this;
  }
}

export default new CartPage();
