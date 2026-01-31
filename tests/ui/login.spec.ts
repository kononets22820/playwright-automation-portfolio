import { test, expect } from '@playwright/test';
import { loginAsStandardUser } from '../../src/utils/auth';

test('Login works (SauceDemo)', async ({ page }) => {
  await loginAsStandardUser(page);
  await expect(page).toHaveURL(/inventory/);
});