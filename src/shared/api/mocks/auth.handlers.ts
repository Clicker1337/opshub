import { delay, http, HttpResponse } from 'msw';

import { API_ROUTES } from '@/shared/config/api';
import { env } from '@/shared/config/env';

const MOCK_DELAY_MS = 400;

const MOCK_USER = {
  id: 'u-1',
  email: 'admin@opshub.local',
  name: 'Admin User',
  role: 'admin',
} as const;

const MOCK_TOKEN = 'mock-jwt-token-opshub';

const MOCK_CREDENTIALS = {
  email: 'admin@opshub.local',
  password: 'admin123',
} as const;

interface LoginRequestBody {
  email: string;
  password: string;
}

export const authHandlers = [
  http.post(`${env.VITE_API_BASE_URL}${API_ROUTES.auth.login}`, async ({ request }) => {
    await delay(MOCK_DELAY_MS);

    const body = (await request.json()) as LoginRequestBody;

    if (body.email !== MOCK_CREDENTIALS.email || body.password !== MOCK_CREDENTIALS.password) {
      return HttpResponse.json(
        { code: 'INVALID_CREDENTIALS', message: 'Invalid email or password' },
        { status: 401 },
      );
    }

    return HttpResponse.json({
      user: MOCK_USER,
      token: MOCK_TOKEN,
    });
  }),

  http.post(`${env.VITE_API_BASE_URL}${API_ROUTES.auth.logout}`, async () => {
    await delay(MOCK_DELAY_MS);
    return HttpResponse.json({ success: true });
  }),

  http.get(`${env.VITE_API_BASE_URL}${API_ROUTES.auth.me}`, async ({ request }) => {
    await delay(MOCK_DELAY_MS);

    const authHeader = request.headers.get('Authorization');
    if (authHeader !== `Bearer ${MOCK_TOKEN}`) {
      return HttpResponse.json(
        { code: 'UNAUTHORIZED', message: 'Not authenticated' },
        { status: 401 },
      );
    }

    return HttpResponse.json(MOCK_USER);
  }),
];
