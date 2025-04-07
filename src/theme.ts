import { extendTheme  } from '@mui/joy/styles';



const theme = extendTheme({
  fontFamily: {
    display: 'Roboto', // applies to headings like `h1`–`h4`
    body: 'Roboto', // applies to body text and other generic elements
  },
  typography: {
    'body-sm': {
      fontWeight: 400,
    },
    'body-md': {
      fontWeight: 400,
      color: 'var(--joy-palette-primary-500)',
    },
    'account-selected': { // Custom key
      fontWeight: '600',
      fontSize: '1rem',
      lineHeight: 1.5,
      color: 'var(--joy-palette-text-primary, #171a1c)',
    },
    h4: {
      fontSize: 'var(--joy-fontSize-xl)', // Use your desired font size variable or a specific value
      fontWeight: 700, // Optionally set the font weight
      lineHeight: 1.5, // Optionally set line height
    },
    // Add other headings if needed
    h1: {
      fontSize: 'var(--joy-fontSize-xxl)', // Example for h1
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: 'var(--joy-fontSize-xl)', // Example for h2
      fontWeight: 600,
      lineHeight: 1.3,
    },
  
  },
  
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#E9F3F2',
          100: '#D6EAE9',
          200: '#DEE3E6',
          300: '#C7CCD2',
          400: '#91969C',
          500: '#555E68',
          600: '#32383E',
          700: '#171A1C',
          800: '#0B0D0E',
          900: '#0B0D0E',
          solidBg: 'var(--joy-palette-primary-500)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
          outlinedHoverBg: '#E8ECEF',
          plainColor: '#2B6FA6',
          plainHoverColor: '#E8ECEF',
        },
        focusVisible: 'rgba(3, 102, 214, 0.3)',
        text: {
          tertiary: 'var(--joy-palette-primary-500)',
          primary: 'var(--joy-palette-primary-700)',
        },
        background: {
          body: '#f0f4f8', // Striking yellow background color
        },
      },
    },
  },
  components: {
    JoyLink: {
      styleOverrides: {
        root: {
          color: 'var(--joy-palette-primary-plainColor)',
          textDecoration: 'underline',
          '&:hover': {
            backgroundColor: 'var(--joy-palette-primary-plainHoverColor)',
          },
        },
      },
    },
    JoyButton: {
      defaultProps: {
        size: 'lg',
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.color === 'primary' && {
            backgroundColor: 'primary.solidBg',
          }),
          ...(ownerState.variant === 'plain' && {
            color: 'var(--joy-palette-primary-outlinedColor)',
            '&:hover': {
              color: 'var(--joy-palette-primary-outlinedColor)',
              backgroundColor: 'var(--joy-palette-primary-outlinedHoverBg)',
            },
          }),
        }),
      },
    },
    JoyInput: {
      styleOverrides: {
        root: {
          height: '40px',
          borderRadius: '8px',
        },
      },
    },
    JoySheet: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--joy-palette-common-white)',
        },
      },
    },
    JoyAlert: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--joy-palette-common-white)',
          alignItems: 'flex-start',
        },
      },
    },
    JoyFormLabel: {
      styleOverrides: {
        root: {
          color: 'var(--joy-palette-primary-700)',
          fontWeight: 550,
        },
      },
    },
    JoyListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          '&.Mui-selected': {
            backgroundColor: 'var(--joy-palette-primary-100)',
          },
          '&:not(.Mui-selected)': {
            '&:hover': {
              backgroundColor: 'var(--joy-palette-primary-50)',
            },
          },
        },
      },
    },
  },
});

export default theme;
