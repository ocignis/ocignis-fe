import { Box, Link as MUILink } from '@mui/material';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Box>
      <Link href="/" passHref>
        <MUILink component="div" sx={{ display: 'flex', alignItems: 'center', color: 'inherit' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 0.5 }}>
            <img src="/assets/logo.png" alt="logo" height={35} />
          </Box>
        </MUILink>
      </Link>
    </Box>
  );
};
