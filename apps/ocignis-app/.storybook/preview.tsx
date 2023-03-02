import { ThemeProvider, CssBaseline } from '@mui/material';
import { Story } from '@storybook/react';
import { theme } from 'config-mui';
import { baseParameters } from 'config-storybook';
import { Toaster } from 'react-hot-toast';

export const parameters = baseParameters;

const withThemeDecorator = (Story: Story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story />
    <Toaster />
  </ThemeProvider>
);

export const decorators = [withThemeDecorator];
