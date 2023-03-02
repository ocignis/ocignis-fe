import { Typography, useTheme } from '@mui/material';

export type VersionProps = {
  version: string;
};

export const Version = ({ version }: VersionProps) => {
  const theme = useTheme();

  return <Typography sx={{ fontSize: 12, fontStyle: 'italic', color: theme.palette.grey[600] }}>{version}</Typography>;
};
