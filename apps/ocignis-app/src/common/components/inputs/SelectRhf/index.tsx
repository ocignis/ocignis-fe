import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';

import { Select, SelectProps } from '../Select';

export type SelectRhfProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>, TItemValue> = Omit<
  SelectProps<TItemValue>,
  'value' | 'onChange' | 'errorMessage'
> & {
  rhfName: TName;
  rhfControl: Control<TFieldValues>;
};

export const SelectRhf = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
  TItemValue extends string | number | undefined,
>({
  rhfName,
  rhfControl,
  label,
  isFullWidth = true,
  items,
  size = 'small',
  addLabelMargin = true,
  sx,
}: SelectRhfProps<TFieldValues, TName, TItemValue>) => {
  return (
    <Controller
      key={rhfName}
      name={rhfName}
      control={rhfControl}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Select
          label={label}
          isFullWidth={isFullWidth}
          errorMessage={error?.message}
          items={items}
          value={value}
          onChange={onChange}
          size={size}
          addLabelMargin={addLabelMargin}
          sx={sx}
        />
      )}
    />
  );
};
