// theme-typings.d.ts
import { TypographySystemOptions } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface TypographySystem {
    'account-selected': TypographySystemOptions['body-md']; // Use the same structure as other typography levels
  }

  interface TypographySystemOptions {
    'account-selected'?: {
      fontWeight: number | string;
      fontSize: string;
      lineHeight: number | string;
      color: string;
    };
  }
}
