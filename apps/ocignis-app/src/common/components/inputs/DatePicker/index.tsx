import { Box, TextField } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { dateFormat } from 'ocignis-utils';

import { ErrorMessage } from '../ErrorMessage';

export type DatePickerProps = {
  label: string;
  value: string | Date;
  errorMessage?: string;
  isFullWidth?: boolean;
  onChange: (dateSelected: string | Date) => void;
};

export const DatePicker = ({ label, value, errorMessage, isFullWidth = true, onChange }: DatePickerProps) => {
  return (
    <DesktopDatePicker
      label={label}
      value={value}
      inputFormat={dateFormat.DATE_TIME}
      onChange={(value, keyboardInputValue) => {
        if (keyboardInputValue !== undefined) {
          const keyboardInputValueFormatted =
            typeof value === 'string' ? keyboardInputValue : new Date(keyboardInputValue);

          onChange(keyboardInputValueFormatted);
        }

        // @ts-expect-error Null value cant be triggered.
        onChange(value);
      }}
      renderInput={(params) => (
        <Box sx={{ mt: 1 }}>
          <TextField fullWidth={isFullWidth} error={Boolean(errorMessage)} {...params} />
          <Box>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </Box>
        </Box>
      )}
    />
  );
};
