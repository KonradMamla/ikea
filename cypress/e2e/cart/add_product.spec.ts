import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import products from '../../fixtures/products';

describe('Cart – Add product', () => {
  beforeEach(() => {
    cy.setConsentCookies();
    ProductPage.goToProductPage()
  });

  products.forEach(({ productID, productName, productDescription, expectedPrice }) => {
      it(`Should add ${productName} ${productDescription} by productID to the cart and verify its price`, () => {
        cy.allure()
          .description('Verify that a product added by productID appears in the cart with correct price.')
          .tag('cart', 'checkout')
          .severity('critical');

        ProductPage
          .searchProductByID(productID)
          .verifyOnlyProductsWithIDAreVisible(productID)
          .selectProductByID(productID)
          .clickAddToCartButton()
          .clickGoToCartButton();

        CartPage
          .verifyOnlyProductWithIDIsVisible(productID)
          .verifySummaryPrice(expectedPrice);
      });
    }
  );
});