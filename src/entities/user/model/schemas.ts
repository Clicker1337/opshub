import { z } from 'zod';

import { USER_ROLES } from './types';

export const userSchema = z.object({
  id: z.string().min(1),
  email: z.email(),
  name: z.string().min(1),
  role: z.enum(USER_ROLES),
});

export const authSessionSchema = z.object({
  user: userSchema,
  token: z.string().min(1),
});

export const apiErrorSchema = z.object({
  code: z.string(),
  message: z.string(),
  details: z.record(z.string(), z.unknown()).optional(),
});
