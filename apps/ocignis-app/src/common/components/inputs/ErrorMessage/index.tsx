import { Typography, useTheme } from '@mui/material';

export type ErrorMessageProps = {
  children: React.ReactNode | undefined;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  const theme = useTheme();

  if (children === undefined) {
    return null;
  }

  return (
    <Typography variant="label" sx={{ color: theme.palette.error.main, fontStyle: 'italic' }}>
      {children}
    </Typography>
  );
};
