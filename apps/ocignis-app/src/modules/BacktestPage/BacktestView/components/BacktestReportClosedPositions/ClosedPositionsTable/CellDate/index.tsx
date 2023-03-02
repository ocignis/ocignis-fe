import { Typography } from '@mui/material';
import { formatDateToHuman } from 'ocignis-utils';

export type CellDateProps = {
  date: number;
};

export const CellDate = ({ date }: CellDateProps) => {
  return <Typography variant="controlActive">{formatDateToHuman({ date }).human}</Typography>;
};
