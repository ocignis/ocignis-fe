import { CloseRounded as CloseRoundedIcon } from '@mui/icons-material';
import { Box, Typography, IconButton, CircularProgress } from '@mui/material';
import { toast } from 'react-hot-toast';

import { useTimer } from './useTimer';

export type ShowNotificationParams = {
  toastInstanceId: string;
  title: string;
  showDuration?: boolean;
  isLoading?: boolean;
};

export const CustomNotification = ({
  toastInstanceId,
  title,
  isLoading,
  showDuration = false,
}: ShowNotificationParams) => {
  const { elapsedTime } = useTimer({ isEnabled: showDuration });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        pl: 0.7,
        minWidth: '280px',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isLoading && <CircularProgress size={15} color={'inherit'} />}
          <Typography ml={1} sx={{ fontSize: '14px', color: 'inherit' }}>
            {title}
          </Typography>
        </Box>
        {showDuration && (
          <Typography sx={{ fontSize: '14px', fontStyle: 'italic', color: '#e1e4f0' }}>{elapsedTime}</Typography>
        )}
      </Box>
      <IconButton color="inherit" onClick={() => toast.dismiss(toastInstanceId)}>
        <CloseRoundedIcon />
      </IconButton>
    </Box>
  );
};
