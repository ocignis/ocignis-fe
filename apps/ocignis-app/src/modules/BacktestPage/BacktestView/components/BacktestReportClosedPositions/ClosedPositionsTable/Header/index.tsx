import { Typography, useTheme } from '@mui/material';

export type HeaderProps = {
  label: string;
};

export const Header = ({ label }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Typography variant="controlActive" color={theme.palette.dark[2]}>
      {label}
    </Typography>
  );
};
