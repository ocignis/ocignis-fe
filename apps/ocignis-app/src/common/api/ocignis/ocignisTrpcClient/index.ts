import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';

import { AppRouter } from '../api-types';

export const ocignisTrpcClient = createTRPCReact<AppRouter>();

export const ocignisTrpcClientProvider = ocignisTrpcClient.createClient({
  links: [
    httpBatchLink({
      url: process.env.NEXT_PUBLIC_BASE_URL_OCIGNIS_API,
    }),
  ],
  transformer: superjson,
});
