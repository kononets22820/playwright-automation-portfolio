import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  private firstName: Locator;
  private lastName: Locator;
  private postalCode: Locator;
  private continueButton: Locator;
  private finishButton: Locator;

  constructor(private page: Page) {
    this.firstName = page.locator('[data-test="firstName"]');
    this.lastName = page.locator('[data-test="lastName"]');
    this.postalCode = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
  }

  async fillCustomerInfo() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.postalCode.fill('12345');
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }
}