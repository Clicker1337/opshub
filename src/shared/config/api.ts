export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
  },
  users: {
    list: '/users',
    byId: (id: string) => `/users/${id}`,
  },
  installations: {
    list: '/installations',
    byId: (id: string) => `/installations/${id}`,
  },
  jobs: {
    list: '/jobs',
    byId: (id: string) => `/jobs/${id}`,
    logs: (id: string) => `/jobs/${id}/logs`,
  },
  audit: {
    list: '/audit',
  },
} as const;
