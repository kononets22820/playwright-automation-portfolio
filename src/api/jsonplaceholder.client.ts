import { APIRequestContext, expect } from '@playwright/test';
import { env } from '../utils/env';
import { endpoints } from './endpoints';

export class JsonPlaceholderClient {
  constructor(private request: APIRequestContext) {}

  async getPost(id: number) {
    const res = await this.request.get(`${env.apiBaseUrl}${endpoints.postById(id)}`, {
      headers: { Accept: 'application/json' }
    });

    expect(res.status()).toBe(200);
    return res.json();
  }
}