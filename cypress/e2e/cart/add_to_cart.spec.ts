import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';
import products from '../../fixtures/products';

describe('Cart and Checkout - Adding a product to the cart', () => {
  beforeEach(() => {
    ProductPage.goToProductPage().clickAcceptCookiesButton();
  });

  products.forEach(
    ({ productID, productName, productDescription, expectedPrice }) => {
      it(`Should add ${productName} ${productDescription} to the cart and verify its price`, () => {
        cy.allure()
          .description(
            'Test verifies the process of adding a product to the cart and ensures its price are correct.',
          )
          .tag('cart', 'checkout')
          .severity('critical');

        ProductPage.searchProductByID(productID)
          .selectProductByName(productName)
          .verifyOnlyProductsWithIDAreVisible(productID)
          .clickAddToCartButton()
          .clickGoToCartButton();

        CartPage.verifyOnlyProductWithIDIsVisible(productID).verifySummaryPrice(
          expectedPrice,
        );
      });
    },
  );
});
