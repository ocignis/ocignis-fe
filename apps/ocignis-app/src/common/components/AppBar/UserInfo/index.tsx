import { KeyboardArrowDownRounded as KeyboardArrowDownIcon } from '@mui/icons-material';
import { IconButton, Box, Avatar, Tooltip } from '@mui/material';
import { Button } from 'ocignis-ui';
import { useState } from 'react';

import { AppBarUser } from '../types';

import { UserMenu } from './UserMenu';

export type UserInfoProps = {
  user: AppBarUser | null;
  onSignIn: () => void;
  onSignOut: () => void;
};

export const UserInfo = ({ user, onSignIn, onSignOut }: UserInfoProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <Box>
      {user ? (
        <>
          <Tooltip title="Account">
            <IconButton onClick={(event) => setAnchorEl(event.currentTarget)} size="small">
              <Avatar sx={{ width: 44, height: 44, mr: 0.8 }} src={user.avatarUrl}>
                {user.name[0]}
              </Avatar>
              <KeyboardArrowDownIcon
                sx={{
                  fill: 'white',
                  transition: 'all 0.25s ease',
                  transform: `rotate(${Boolean(anchorEl) ? '0.5turn' : 0})`,
                }}
              />
            </IconButton>
          </Tooltip>
          <UserMenu user={user} anchorEl={anchorEl} onResetAnchorEl={() => setAnchorEl(null)} onSignOut={onSignOut} />
        </>
      ) : (
        <Button variant="text" sx={{ color: 'inherit', border: '1px solid white' }} onClick={onSignIn}>
          Sign In
        </Button>
      )}
    </Box>
  );
};
