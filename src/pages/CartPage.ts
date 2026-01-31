import { Page, Locator } from '@playwright/test';

export class CartPage {
  private checkoutButton: Locator;

  constructor(private page: Page) {
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}