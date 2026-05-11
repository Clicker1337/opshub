export const HTTP_TIMEOUT_MS = 15_000;

export const PAGINATION = {
  defaultPage: 1,
  defaultPageSize: 20,
  pageSizeOptions: [10, 20, 50, 100] as const,
} as const;

export const DEBOUNCE_MS = {
  search: 300,
  resize: 150,
} as const;

export const STORAGE_KEYS = {
  authToken: 'opshub.auth.token',
  themeMode: 'opshub.ui.theme',
  language: 'opshub.ui.language',
} as const;

export const ROUTES = {
  login: '/login',
  dashboard: '/',
  installations: '/installations',
  users: '/users',
  jobs: '/jobs',
  audit: '/audit',
  settings: '/settings',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
