import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { themes } from '@storybook/theming'

import { addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'

const theme = AppTheme({ darkMode: true })

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  docs: {
    theme: themes.dark
  }
}



addDecorator(jsxDecorator);