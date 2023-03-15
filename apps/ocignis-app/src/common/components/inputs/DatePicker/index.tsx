import { BaseTextFieldProps, Box, SxProps } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import { dateFormat } from 'ocignis-utils';

import { ErrorMessage } from '../ErrorMessage';

export type DatePickerProps = {
  label: string;
  value: Date | null;
  errorMessage?: string;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  size?: BaseTextFieldProps['size'];
  addLabelMargin?: boolean;
  sx?: SxProps;
  onChange: (dateSelected: Date | null) => void;
};

export const DatePicker = ({
  label,
  value,
  errorMessage,
  isDisabled = false,
  isFullWidth = true,
  size = 'small',
  addLabelMargin = false,
  sx,
  onChange,
}: DatePickerProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: addLabelMargin ? 1 : 0 }}>
      <DesktopDatePicker
        disabled={isDisabled}
        label={label}
        value={value}
        format={dateFormat.DATE_TIME}
        onChange={onChange}
        slotProps={{
          textField: {
            fullWidth: isFullWidth,
            size,
            error: Boolean(errorMessage),
            sx,
          },
        }}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Box>
  );
};
