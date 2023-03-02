import { format } from 'date-fns';

import { dateFormat } from './dateFormat';

type FormatDateToHumanParams = {
  date: string | number | Date;
  showMs?: boolean;
};

export const formatDateToHuman = ({ date, showMs = false }: FormatDateToHumanParams) => {
  const humanLocal = format(new Date(date), showMs ? dateFormat.DATE_TIME_MS : dateFormat.DATE_TIME);

  const dateIso = dateToIsoString(date);
  const timeStringLength = showMs ? 23 : 19;
  const human = `${dateIso.substring(0, 10)} ${dateIso.substring(11, timeStringLength)}`;

  return {
    human,
    humanLocal,
  };
};

const dateToIsoString = (date: string | number | Date): string => {
  if (date instanceof Date) {
    return date.toISOString();
  }

  if (typeof date === 'number') {
    return new Date(date).toISOString();
  }

  return date;
};
