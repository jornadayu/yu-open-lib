import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

import { themes } from '@storybook/theming'

import { addDecorator } from '@storybook/react'
import { jsxDecorator } from 'storybook-addon-jsx'
import { muiTheme } from 'storybook-addon-material-ui'
// import { withInfo } from '@storybook/addon-info'

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'
import pkg from '../package.json'
import { BADGES } from './constants'

const theme = AppTheme({ darkMode: true })

export const decorators = [
  jsxDecorator(),
  muiTheme([theme])
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
    }
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
