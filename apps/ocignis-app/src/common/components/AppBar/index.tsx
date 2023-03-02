import { useTheme, Box } from '@mui/material';

import { AppBarItems } from './AppBarItems';
import { Logo } from './Logo';
import { AppBarProps } from './types';
import { UserInfo } from './UserInfo';

export const APP_BAR_HEIGHT = 65;

export const AppBar = ({ links, user, onSignIn, onSignOut }: AppBarProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.neutral.white,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: `${APP_BAR_HEIGHT}px`,
          marginX: 1,
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Logo />
          <AppBarItems links={links} />
        </Box>
        <UserInfo user={user} onSignIn={onSignIn} onSignOut={onSignOut} />
      </Box>
    </Box>
  );
};
