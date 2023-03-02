import { SearchRounded as SearchRoundedIcon } from '@mui/icons-material';
import { BaseTextFieldProps, Box, SxProps, TextField, InputAdornment } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';

import { ErrorMessage } from '../ErrorMessage';

export type InputProps = {
  label: string;
  isFullWidth?: boolean;
  errorMessage?: string;
  value: string | undefined;
  onChange: (inputText: string) => void;
  size?: BaseTextFieldProps['size'];
  type?: HTMLInputTypeAttribute;
  rows?: number;
  addLabelMargin?: boolean;
  hasSearchIcon?: boolean;
  sx?: SxProps;
};

export const Input = ({
  label,
  isFullWidth = true,
  errorMessage,
  value,
  size = 'small',
  type,
  rows,
  addLabelMargin = false,
  hasSearchIcon = false,
  sx,
  onChange,
}: InputProps) => {
  return (
    <Box sx={{ mt: addLabelMargin ? 1 : 0, ...sx }}>
      <TextField
        multiline={!!rows}
        rows={rows}
        type={type}
        label={label}
        size={size}
        fullWidth={isFullWidth}
        variant="outlined"
        error={Boolean(errorMessage)}
        value={value ?? ''}
        onChange={(event) => onChange(event.target.value)}
        InputProps={{
          endAdornment: hasSearchIcon ? (
            <InputAdornment position="end">
              <SearchRoundedIcon />
            </InputAdornment>
          ) : undefined,
        }}
      />
      <Box>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </Box>
    </Box>
  );
};
