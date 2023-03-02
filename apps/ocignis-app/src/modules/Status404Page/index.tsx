import { Box, Typography } from '@mui/material';

export const Status404Page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginX: 'auto',
        marginTop: '30vh',
      }}
    >
      <Typography variant="header">404</Typography>
      <Typography variant="subheader2" mt={1}>
        Page not found
      </Typography>
    </Box>
  );
};
