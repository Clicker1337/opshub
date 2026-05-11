import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { STORAGE_KEYS } from '@/shared/config/constants';
import { env } from '@/shared/config/env';
import { getStorageItem } from '@/shared/lib/storage';

export const API_TAGS = {
  user: 'User',
  installation: 'Installation',
  job: 'Job',
} as const;

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = getStorageItem(STORAGE_KEYS.authToken);
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: Object.values(API_TAGS),
  endpoints: () => ({}),
});
