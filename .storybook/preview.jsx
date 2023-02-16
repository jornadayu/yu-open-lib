import React, { useMemo } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { themes } from '@storybook/theming'

import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
// import { withInfo } from '@storybook/addon-info'

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'
import pkg from '../package.json'
import { BADGES } from './constants'

const theme = AppTheme({ darkMode: true })

const withMuiTheme = (Story, context) => {
  const mode = context.globals?.muiMode;

  const theme = useMemo(() => AppTheme({ darkMode: mode === 'dark' }), [mode])

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

export const decorators = [
  withMuiTheme
]

export const parameters = {
  backgrounds: { disable: true },
  options: {
    storySort: {
      order: ['yu-open-lib', ['Intro', 'AppTheme'], 'Components', 'Hooks', 'Graphs']
    }
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    },
    expanded: true
  },
  docs: {
    theme: themes.dark,
    source: {
      excludeDecorators: true,
    }
  },
  badgesConfig: {
    [BADGES.UNRELEASED] : {
      contrast: '#ece9e9',
      color: '#b92222',
      title: 'Unreleased'
    }
  }
}

