import { createTheme } from '@mui/material';

export const theme = createTheme({
  // Palette
  palette: {
    neutral: { white: '#FFFFFF', 1: '#F7F8F6', 2: '#EEF0EC', 3: '#DEE2DA' },
    dark: { 4: '#E5E6E6', 3: '#D0D2D2', 2: '#6E7373', 1: '#434D4B', black: '#141712' },
    completion: { complete: '#9BBE1D', inProgress: '#CDDE8E', notStarted: '#E6EFC6' },
    errorMode: { 1: '#C84429', 2: '#FAF1EF' },
  },

  // Typography
  typography: {
    header: {
      fontSize: 28,
      fontWeight: 700,
      color: '#000000',
    },
    subheader1: {
      fontSize: 24,
      fontWeight: 400,
      color: '#000000',
    },
    subheader2: {
      fontSize: 20,
      fontWeight: 400,
      color: '#000000',
    },
    bodyText: {
      fontSize: 16,
      fontWeight: 400,
      color: '#000000',
    },
    label: {
      fontSize: 13,
      fontWeight: 400,
      color: '#000000',
    },
    controlActive: {
      fontSize: 14,
      fontWeight: 400,
      color: '#000000',
    },
    controlInactive: {
      fontSize: 14,
      fontWeight: 400,
      fontStyle: 'italic',
      color: 'gray',
    },
  },

  // Breakpoints
  breakpoints: {
    values: {
      // default
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      // added
      tablet: 1024,
      desktop: 1280,
    },
  },

  // Components
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
