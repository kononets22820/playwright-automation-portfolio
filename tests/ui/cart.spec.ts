import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../src/pages/InventoryPage';

test('Add product to cart', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  const inventory = new InventoryPage(page);
  await inventory.addBackpackToCart();

  expect(await inventory.getCartCount()).toBe('1');
});