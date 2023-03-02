import { QueryCache, QueryClient, QueryClientConfig } from '@tanstack/react-query';
import { showNotification } from 'ocignis-ui';

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Error happened: ', error);

      showNotification({
        type: 'error',
        // @ts-expect-error React query return error message
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        title: `Error happened: ${error?.message}.`,
        toastDismissAll: true,
      });
    },
  }),
};

export const reactQueryClient = new QueryClient(queryClientConfig);
