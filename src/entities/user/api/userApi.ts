import { API_TAGS, baseApi } from '@/shared/api/baseApi';
import { API_ROUTES } from '@/shared/config/api';

import { authSessionSchema, userSchema } from '../model/schemas';
import type { AuthSession, User } from '../model/types';

interface LoginRequest {
  email: string;
  password: string;
}

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthSession, LoginRequest>({
      query: (credentials) => ({
        url: API_ROUTES.auth.login,
        method: 'POST',
        body: credentials,
      }),
      transformResponse: (response: unknown): AuthSession => authSessionSchema.parse(response),
      invalidatesTags: [API_TAGS.user],
    }),

    logout: build.mutation<undefined, undefined>({
      query: () => ({
        url: API_ROUTES.auth.logout,
        method: 'POST',
      }),
      invalidatesTags: [API_TAGS.user],
    }),

    getMe: build.query<User, undefined>({
      query: () => ({
        url: API_ROUTES.auth.me,
        method: 'GET',
      }),
      transformResponse: (response: unknown): User => userSchema.parse(response),
      providesTags: [API_TAGS.user],
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetMeQuery } = userApi;
