import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private addToCartButton: Locator;
  private cartBadge: Locator;

  constructor(private page: Page) {
    this.addToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addBackpackToCart() {
    await this.addToCartButton.click();
  }

  async getCartCount() {
    return this.cartBadge.textContent();
  }

  async goToCart() {
    await this.page.click('.shopping_cart_link');
  }
}