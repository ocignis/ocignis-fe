import { useTheme, Link as MUILink, Typography } from '@mui/material';

export type AppBarItemLinkProps = {
  name: string;
  isSelected: boolean;
  isDisabled: boolean;
};

export const AppBarItemLink = ({ name, isSelected, isDisabled }: AppBarItemLinkProps) => {
  const theme = useTheme();

  return (
    <MUILink
      component="button"
      disabled={isDisabled}
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.neutral.white,
        px: 1.7,
        cursor: isSelected ? 'default' : 'pointer',
        '&:hover': {
          textDecoration: isSelected ? 'none' : 'underline',
        },
        '&[disabled]': {
          color: 'darkgray',
          cursor: 'default',
          '&:hover': {
            textDecoration: 'none',
          },
        },
      }}
    >
      <Typography
        variant={isSelected ? 'bodyText' : 'bodyText'}
        sx={{ fontWeight: isSelected ? 700 : 400 }}
        color="inherit"
      >
        {name}
      </Typography>
    </MUILink>
  );
};
