import { ptBR } from '@material-ui/core/locale'
import { createTheme, ThemeOptions } from '@material-ui/core/styles'

interface AppThemeOptions {
  darkMode?: boolean
  options?: ThemeOptions
}

const AppTheme = ({ darkMode = false, options }: AppThemeOptions) =>
  createTheme(
    {
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
        type: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#4179ad' : '#1879ba',
          dark: '#1879ba'
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
          main: darkMode ? '#4caf50' : '#4caf50',
          dark: '#458c48'
        },
        background: {
          default: darkMode ? '#303030' : '#fff'
        },
        toolbar: {
          background: '#434242'
        }
      },
      ...options
    },
    ptBR
  )

export default AppTheme
