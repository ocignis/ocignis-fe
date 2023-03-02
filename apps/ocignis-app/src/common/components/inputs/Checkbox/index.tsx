import { FormControlLabel, Checkbox as CheckboxMui, SxProps } from '@mui/material';

import { ErrorMessage } from '../ErrorMessage';

export type CheckboxProps = {
  label: string;
  errorMessage?: string;
  value: boolean;
  onChange: (isChecked: boolean) => void;
  sx?: SxProps;
};

export const Checkbox = ({ label, errorMessage, value, onChange, sx }: CheckboxProps) => {
  return (
    <>
      <FormControlLabel
        control={<CheckboxMui size="small" checked={value} onChange={(event) => onChange(event.target.checked)} />}
        label={label}
        sx={sx}
      />
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </>
  );
};
