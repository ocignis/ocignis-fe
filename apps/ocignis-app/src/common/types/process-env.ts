/* eslint-disable @typescript-eslint/consistent-type-definitions */

import { z } from 'zod';

const envVariables = z.object({
  NEXT_PUBLIC_NODE_ENV: z.union([z.literal('development'), z.literal('production')]),
  NEXT_PUBLIC_BASE_URL_OCIGNIS_API: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
