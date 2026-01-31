import { Page } from '@playwright/test';
import { sauceUsers } from '../fixtures/users';

export async function loginAsStandardUser(page: Page) {
  await page.goto('/');
  await page.fill('#user-name', sauceUsers.standard.username);
  await page.fill('#password', sauceUsers.standard.password);
  await page.click('#login-button');
}