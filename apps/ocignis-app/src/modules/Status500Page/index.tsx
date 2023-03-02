import { Box, Typography } from '@mui/material';

export const Status500Page = () => {
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
      <Typography variant="header">500</Typography>
      <Typography variant="subheader2" mt={1}>
        Something went wrong
      </Typography>
    </Box>
  );
};
