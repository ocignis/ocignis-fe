import { Box, SxProps, Typography } from '@mui/material';
import { ReactNode } from 'react';

type BlockInfoProps = {
  children: ReactNode;
  title: string;
  sx?: SxProps;
  className?: string;
};

export const BlockInfo = ({ children, title, sx, className }: BlockInfoProps) => {
  return (
    <Box className={className} sx={{ p: 0.7, border: '1px solid gray', borderRadius: '4px', ...sx }}>
      <Typography variant="bodyText" sx={{ fontWeight: 'bold' }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
