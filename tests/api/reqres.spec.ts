import { test, expect } from '@playwright/test';

test('API: GET posts returns 200 (JSONPlaceholder)', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
});