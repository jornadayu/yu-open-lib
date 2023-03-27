import React, { useEffect, useMemo, useState } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { themes } from '@storybook/theming'
import { addons } from '@storybook/preview-api';

import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'

const withMuiTheme = (Story, context) => {
  // get channel to listen to event emitter
  const channel = addons.getChannel();

  const [isDark, setDark] = useState(true);
  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);

  const theme = useMemo(() => AppTheme({ darkMode: isDark }), [isDark])

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
  }
}

