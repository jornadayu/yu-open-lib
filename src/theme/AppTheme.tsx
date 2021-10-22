import { Localization, ptBR as coreptBR } from '@mui/material/locale'
import { createTheme, ThemeOptions, Theme } from '@mui/material/styles'
import { deepmerge } from '@mui/utils'

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

export type AppThemeOptions = {
  /** @default false */
  darkMode?: boolean
  options?: ThemeOptions
  /** @default ptBR */
  locale?: Localization
}

const AppTheme = ({
  darkMode = true,
  locale = coreptBR,
  options
}: AppThemeOptions) =>
  createTheme(
    deepmerge(
      {
        components: {
          MuiCard: {
            styleOverrides: {
              root: {
                backgroundColor: '#424242'
              }
            }
          },
          MuiButton: {
            styleOverrides: {
              root: {
                borderRadius: 0
              }
            }
          }
        },
        typography: {
          fontFamily: [
            'DM Sans',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
          ].join(','),
          h1: {
            fontFamily: 'Integral CF Bold'
          },
          h2: {
            fontFamily: 'Integral CF Bold'
          },
          h3: {
            fontFamily: 'Integral CF Bold',
            fontSize: '1.9375rem'
          }
        },
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: darkMode ? '#00CCFF' : '#166faa',
            dark: '#166faa'
          },
          secondary: {
            main: darkMode ? '#f44336' : '#cc4b37',
            dark: '#cc4b37'
          },
          warning: {
            main: darkMode ? '#f57c00' : '#e64a19',
            dark: '#e64a19'
          },
          success: {
            main: darkMode ? '#00FF00' : '#00FF00',
            dark: '#07d607'
          },
          background: {
            default: darkMode ? '#303030' : '#fff',
            paper: darkMode ? '#424242' : '#fff'
          }
        }
      },
      options
    ),
    locale
  )

export default AppTheme
