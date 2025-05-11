import CartPage from '../../pages/CartPage';
import products from '../../fixtures/products';

describe('Cart – Remove product from cart', () => {
  beforeEach(() => {
    cy.setConsentCookies();
    cy.mockCartWithOneProduct();
    cy.mockRemoveItemFromCart();
    CartPage.goToCartPage();
    cy.wait('@mockCart');
  });

  it('Should remove the product from the cart and show an empty state', () => {
    cy.allure()
      .epic('Cart & Checkout')
      .feature('Remove product')
      .description('Verify user can remove a product from cart and see empty state.')
      .tag('cart', 'checkout')
      .severity('critical');

    const product = products[0];

    CartPage
        .verifyCartIsNotEmpty()
        .removeProductFromCartByName(product.productName);

    cy.mockCartEmpty();
    cy.wait('@removeItem');

    cy.reload();
    cy.wait('@mockCartEmpty');

    CartPage.verifyCartIsEmpty();
  });
});
