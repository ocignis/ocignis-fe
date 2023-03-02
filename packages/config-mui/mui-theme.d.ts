/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  // Palette
  interface Palette {
    neutral: {
      white: CSSProperties['color'];
      1: CSSProperties['color'];
      2: CSSProperties['color'];
      3: CSSProperties['color'];
    };
    dark: {
      4: CSSProperties['color'];
      3: CSSProperties['color'];
      2: CSSProperties['color'];
      1: CSSProperties['color'];
      black: CSSProperties['color'];
    };
    errorMode: {
      1: CSSProperties['color'];
      2: CSSProperties['color'];
    };
  }

  interface PaletteOptions {
    neutral: {
      white: CSSProperties['color'];
      1: CSSProperties['color'];
      2: CSSProperties['color'];
      3: CSSProperties['color'];
    };
    dark: {
      4: CSSProperties['color'];
      3: CSSProperties['color'];
      2: CSSProperties['color'];
      1: CSSProperties['color'];
      black: CSSProperties['color'];
    };
    completion: {
      complete: CSSProperties['color'];
      inProgress: CSSProperties['color'];
      notStarted: CSSProperties['color'];
    };
    errorMode: {
      1: CSSProperties['color'];
      2: CSSProperties['color'];
    };
  }

  // Typography
  interface TypographyVariants {
    header: React.CSSProperties;
    subheader1: React.CSSProperties;
    subheader2: React.CSSProperties;
    bodyText: React.CSSProperties;
    label: React.CSSProperties;
    controlActive: React.CSSProperties;
    controlInactive: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    header?: React.CSSProperties;
    subheader1?: React.CSSProperties;
    subheader2?: React.CSSProperties;
    bodyText?: React.CSSProperties;
    label?: React.CSSProperties;
    controlActive?: React.CSSProperties;
    controlInactive?: React.CSSProperties;
  }

  // Breakpoints
  interface BreakpointOverrides {
    // default
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // added
    tablet: true;
    desktop: true;
  }
}

// Typography
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // default
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    // added
    header: true;
    subheader1: true;
    subheader2: true;
    bodyText: true;
    label: true;
    inputText: true;
    controlActive: true;
    controlInactive: true;
  }
}
