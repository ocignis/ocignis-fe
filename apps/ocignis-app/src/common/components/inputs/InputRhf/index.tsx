import { useState } from 'react';
import { Controller, Control, FieldValues, FieldPath } from 'react-hook-form';

import { Input, InputProps } from '../Input';

export type InputRhfProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = Omit<
  InputProps,
  'value' | 'onChange' | 'errorMessage'
> & {
  rhfName: TName;
  rhfControl: Control<TFieldValues>;
};

export const InputRhf = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  rhfName,
  rhfControl,
  label,
  isFullWidth = true,
  size = 'small',
  type,
  rows,
  addLabelMargin = true,
  hasSearchIcon = false,
  sx,
}: InputRhfProps<TFieldValues, TName>) => {
  // valueAsNumber in Controllers -  https://github.com/react-hook-form/react-hook-form/discussions/8068#discussioncomment-3088242
  const [valueUi, setValueUi] = useState<string | null>(null);

  return (
    <Controller
      key={rhfName}
      name={rhfName}
      control={rhfControl}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Input
          type={type}
          size={size}
          rows={rows}
          label={label}
          isFullWidth={isFullWidth}
          errorMessage={error?.message}
          addLabelMargin={addLabelMargin}
          hasSearchIcon={hasSearchIcon}
          sx={sx}
          value={valueUi ?? value}
          onChange={(inputText) => {
            setValueUi(inputText);

            if (type === 'number') {
              onChange(Number(inputText));
              return;
            }

            onChange(inputText);
          }}
        />
      )}
    />
  );
};
