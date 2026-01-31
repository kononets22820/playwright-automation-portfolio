import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../../src/utils/auth';
import { InventoryPage } from '../../src/pages/InventoryPage';

test('Add product to cart', async ({ page }) => {
  await loginAsStandardUser(page);

  const inventory = new InventoryPage(page);
  await inventory.addBackpackToCart();

  expect(await inventory.getCartCount()).toBe('1');
});