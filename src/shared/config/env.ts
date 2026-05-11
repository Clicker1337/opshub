import { z } from 'zod';

const envSchema = z.object({
  VITE_API_BASE_URL: z.url(),
  VITE_APP_NAME: z.string().min(1),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  console.error('Invalid environment variables:', z.treeifyError(parsed.error));
  throw new Error('Invalid environment variables. Check .env file.');
}

export const env = parsed.data;
export type Env = z.infer<typeof envSchema>;
