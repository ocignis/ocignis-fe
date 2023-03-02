import { Box, Typography } from '@mui/material';
import { formatDateToHuman } from 'ocignis-utils';

type RowDataProps = {
  title: string;
  value: string | number | Date;
};

export const RowData = ({ title, value }: RowDataProps) => {
  return (
    <Box sx={{ display: 'flex', ml: 1, alignItems: 'center' }}>
      <Typography variant="bodyText" sx={{ fontStyle: 'italic' }}>
        • {title}
      </Typography>
      :<Typography ml={0.4}>{formatValue(value)}</Typography>
    </Box>
  );
};

const formatValue = (value: string | number | Date): string | number => {
  if (value instanceof Date) {
    return formatDateToHuman({ date: value }).human;
  }

  return value;
};
