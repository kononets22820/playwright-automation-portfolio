import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../src/pages/InventoryPage';
import { CartPage } from '../../src/pages/CartPage';
import { CheckoutPage } from '../../src/pages/CheckoutPage';

test('Complete checkout flow (E2E)', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const inventory = new InventoryPage(page);
  await inventory.addBackpackToCart();
  await inventory.goToCart();

  const cart = new CartPage(page);
  await cart.proceedToCheckout();

  const checkout = new CheckoutPage(page);
  await checkout.fillCustomerInfo();
  await checkout.finishCheckout();

  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});