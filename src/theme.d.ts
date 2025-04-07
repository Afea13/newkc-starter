import '@mui/joy/styles';
import type { ThemeVars } from '@mui/joy/styles';

declare module '@mui/joy/styles' {
  interface Theme {
    vars: ThemeVars;
  }
}
