import { Typography, Chip, useTheme } from '@mui/material';
import { roundTo } from 'ocignis-utils';

export type CellGenericProps = {
  content: string | number;
  isColoredNumberValue?: boolean;
};

export const CellGeneric = ({ content, isColoredNumberValue }: CellGenericProps) => {
  const theme = useTheme();

  if (typeof content === 'number') {
    if (!isColoredNumberValue) {
      return <Typography variant="controlActive">{roundTo(content)}</Typography>;
    }

    return (
      <Chip
        label={<Typography variant="controlActive">{roundTo(content)}</Typography>}
        variant="filled"
        sx={{
          backgroundColor: content < 0 ? theme.palette.error.light : theme.palette.success.light,
          borderRadius: '4px',
        }}
      />
    );
  }

  return <Typography variant="controlActive">{content}</Typography>;
};
