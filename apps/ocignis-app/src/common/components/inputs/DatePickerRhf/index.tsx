import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';

import { DatePicker } from '../DatePicker';

export type DatePickerRhfProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  rhfName: TName;
  rhfControl: Control<TFieldValues>;
  label: string;
  isFullWidth?: boolean;
};

export const DatePickerRhf = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  rhfName,
  rhfControl,
  label,
  isFullWidth = true,
}: DatePickerRhfProps<TFieldValues, TName>) => {
  return (
    <Controller
      name={rhfName}
      control={rhfControl}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <DatePicker
          label={label}
          errorMessage={error?.message}
          isFullWidth={isFullWidth}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
