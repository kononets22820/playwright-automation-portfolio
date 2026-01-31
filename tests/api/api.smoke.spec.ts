import { test, expect } from '@playwright/test';
import { JsonPlaceholderClient } from '../../src/api/jsonplaceholder.client';

test('API: GET post by id returns expected fields', async ({ request }) => {
  const api = new JsonPlaceholderClient(request);
  const body = await api.getPost(1);

  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');
});