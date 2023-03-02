import { Box, Typography } from '@mui/material';
import { Version } from 'ocignis-ui';
import { getVersionInfo } from 'utils-version';

export const HomePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginX: 'auto', marginTop: '4vh' }}>
      <img src="/assets/logo.png" alt="logo" width={70} />
      <Typography variant="subheader1">Ocignis App</Typography>
      <Version version={getVersionInfo()} />
    </Box>
  );
};
