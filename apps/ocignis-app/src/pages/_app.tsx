import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from 'config-mui';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { createEmotionCache } from 'utils-mui';
import { getVersionInfo } from 'utils-version';

import { ocignisTrpcClient, ocignisTrpcClientProvider } from 'common/api/ocignis';
import { reactQueryClient } from 'common/reactQueryClient';

const DynamicAppContainerDisabledSSR = dynamic(() => import('../modules/_AppContainer'), {
  ssr: false,
});

const clientSideEmotionCache = createEmotionCache();

const App = (appProps: AppProps) => {
  return (
    <>
      <Head>
        <title>Ocignis App</title>
        <meta name="description" content="Ocignis App" />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ocignisTrpcClient.Provider client={ocignisTrpcClientProvider} queryClient={reactQueryClient}>
        <QueryClientProvider client={reactQueryClient}>
          <CacheProvider value={clientSideEmotionCache}>
            <ThemeProvider theme={theme}>
              <GlobalStyles
                styles={{
                  a: { textDecoration: 'none', color: 'inherit' },
                }}
              />
              <CssBaseline />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DynamicAppContainerDisabledSSR appProps={appProps} />
              </LocalizationProvider>
              <Toaster />
            </ThemeProvider>
          </CacheProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ocignisTrpcClient.Provider>
    </>
  );
};

export default App;
