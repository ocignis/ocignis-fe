import { Box, Typography } from '@mui/material';
import type { AppProps } from 'next/app';

import { AppBar, AppBarUser, APP_BAR_HEIGHT } from 'common/components';

import { useGetAppBarLinks } from './useGetAppBarLinks';

type AppContainerProps = {
  appProps: AppProps;
};

const AppContainer = ({ appProps: { Component, pageProps } }: AppContainerProps) => {
  const { appBarLinks } = useGetAppBarLinks();

  const appBarUser: AppBarUser | null = {
    email: 'test.account@email.com',
    name: 'Test User',
    avatarUrl: '',
  };

  const handleSignIn = () => {
    console.log('handleSignIn');
  };

  const handleSignOut = () => {
    console.log('handleSignOut');
  };

  return (
    <>
      <AppBar links={appBarLinks} user={appBarUser} onSignIn={handleSignIn} onSignOut={handleSignOut} />
      <Box
        sx={{
          mt: `${APP_BAR_HEIGHT}px`,
          height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
          overflowY: 'auto',
          p: 1.5,
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
        {appBarUser ? (
          <Component {...pageProps} />
        ) : (
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              mt: 10,
            }}
          >
            <Typography>Please Sign In</Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default AppContainer;
