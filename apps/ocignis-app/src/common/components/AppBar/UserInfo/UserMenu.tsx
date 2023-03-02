import { LogoutRounded as LogoutIcon } from '@mui/icons-material';
import { Typography, MenuItem, Box, Avatar, Menu, Divider } from '@mui/material';

import { AppBarUser } from '../types';

export type UserMenuProps = {
  user: AppBarUser;
  anchorEl: null | HTMLElement;
  onResetAnchorEl: () => void;
  onSignOut: () => void;
};

export const UserMenu = ({ user, anchorEl, onResetAnchorEl, onSignOut }: UserMenuProps) => {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={onResetAnchorEl} onClick={onResetAnchorEl}>
      <MenuItem>
        <Box sx={{ display: 'flex' }}>
          <Avatar sx={{ width: 28, height: 28 }} src={user.avatarUrl}>
            {user.name[0]}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: 1 }}>
            <Box>
              <Typography variant="subheader2">{user.name}</Typography>
            </Box>
            <Box>
              <Typography variant="controlInactive">{user.email}</Typography>
            </Box>
            <Divider light />
          </Box>
        </Box>
      </MenuItem>
      <MenuItem onClick={onSignOut}>
        <LogoutIcon />
        <Typography variant="bodyText" ml={1}>
          Logout
        </Typography>
      </MenuItem>
    </Menu>
  );
};
