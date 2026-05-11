export const USER_ROLES = ['admin', 'engineer', 'viewer'] as const;

export type UserRole = (typeof USER_ROLES)[number];

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface AuthSession {
  user: User;
  token: string;
}
