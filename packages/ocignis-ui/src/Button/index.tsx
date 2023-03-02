import { ButtonProps as ButtonPropsMui, CircularProgress } from '@mui/material';
import { ReactNode } from 'react';

import { ButtonStyled } from './styled';

export type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  isLoading?: boolean;
} & Omit<ButtonPropsMui, 'startIcon' | 'endIcon'>;

export const Button = ({ children, icon, isLoading, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled variant="contained" startIcon={icon} {...rest}>
      {isLoading ? (
        <>
          <CircularProgress size={25} color={'inherit'} sx={{ mr: 1 }} />
          {children}
        </>
      ) : (
        children
      )}
    </ButtonStyled>
  );
};
