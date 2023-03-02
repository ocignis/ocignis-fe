import { FormControl, FormControlTypeMap, InputLabel, MenuItem, Select as SelectMui, SxProps } from '@mui/material';

import { ErrorMessage } from '../ErrorMessage';

type SelectItem<TValue> = { value: TValue; title: string };

export type SelectProps<TValue> = {
  label: string;
  isFullWidth?: boolean;
  errorMessage?: string;
  value: TValue;
  items: ReadonlyArray<SelectItem<TValue>> | undefined;
  onChange: (selectedValue: Exclude<TValue, undefined>) => void;
  size?: FormControlTypeMap['props']['size'];
  addLabelMargin?: boolean;
  sx?: SxProps;
};

export const Select = <TValue extends string | number | undefined>({
  label,
  isFullWidth = true,
  errorMessage,
  value,
  items,
  onChange,
  size = 'small',
  addLabelMargin = true,
  sx,
}: SelectProps<TValue>) => {
  return (
    <FormControl
      size={size}
      error={Boolean(errorMessage)}
      fullWidth={isFullWidth}
      sx={{ mt: addLabelMargin ? 1 : 0, ...sx }}
    >
      <InputLabel>{label}</InputLabel>
      <SelectMui
        value={value === undefined || items === undefined ? '' : value}
        label={label}
        onChange={(event) => onChange(event.target.value as Exclude<TValue, undefined>)}
      >
        {items
          ? items.map((item) => (
              <MenuItem key={item.title} value={item.value}>
                {item.title}
              </MenuItem>
            ))
          : null}
      </SelectMui>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </FormControl>
  );
};
