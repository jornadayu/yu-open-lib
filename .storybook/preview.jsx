import React from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { themes } from '@storybook/theming'

import { addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
// import { withInfo } from '@storybook/addon-info'

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'
import pkg from '../package.json'
import { BADGES } from './constants'

const theme = AppTheme({ darkMode: true })

export const decorators = [
  jsxDecorator(),
  Story => (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </EmotionThemeProvider>
  )
]

export const parameters = {
  options: {
    storySort: {
      order: [`${pkg.version}`, ['Intro', 'AppTheme'], 'Components', 'Hooks', 'Graphs']
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

// TODO: Decorator breaks with vite
// Uncaught Error: Dynamic require of "./lib/nestedObjectAssign.js" is not supported
// at __require (:6006/node_modules/.vite/chunk-IHTDASF6.js?v=e3b2d4cd:11)
//     at node_modules/nested-object-assign/index.js (:6006/node_modules/.vite/@storybook_addon-info.js?v=e3b2d4cd:477)

// addDecorator(
//   withInfo({
//     inline: true,
//   })
// )
