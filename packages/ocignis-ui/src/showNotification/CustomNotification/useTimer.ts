import { formatDuration, intervalToDuration } from 'date-fns';
import { useEffect, useState } from 'react';

type UseTimerParams = {
  isEnabled: boolean;
};

export const useTimer = ({ isEnabled }: UseTimerParams) => {
  const [elapsedSec, setElapsedSec] = useState(0);
  const [formattedElapsedTime, setFormattedElapsedTime] = useState('0 seconds');

  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    const interval = setInterval(() => {
      setElapsedSec((prev) => prev + 1);

      const dummyUnixDate = 1577883663000;
      const duration = intervalToDuration({
        start: new Date(dummyUnixDate),
        end: new Date(dummyUnixDate + elapsedSec * 1000),
      });

      const formatToHumanDuration = formatDuration(duration, {
        zero: false,
        format: ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'],
      });

      const formattedElapsedTime = formatToHumanDuration === '' ? '0 seconds' : formatToHumanDuration;
      setFormattedElapsedTime(formattedElapsedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, [setElapsedSec, setFormattedElapsedTime, elapsedSec, isEnabled]);

  return { elapsedTime: formattedElapsedTime };
};
