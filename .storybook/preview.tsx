import React, { useEffect, useMemo, useState } from 'react'

import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming'

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import AppTheme from '../src/theme/AppTheme'
import '../src/styles/core.scss'
import { StoryFn } from '@storybook/react';
import { StoryContext } from '@storybook/types';

const withMuiTheme = (Story: StoryFn, context: StoryContext) => {
  const sbTheme: 'dark' | 'light' = context.parameters.theme || context.globals.theme

  const theme = useMemo(() => {
    // TODO: not actually setting storybook theme, just App theme
    addons.setConfig({
      theme: themes[sbTheme]
    })

    return AppTheme({ darkMode: sbTheme === 'dark' })
  }, [sbTheme])

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    </EmotionThemeProvider>
  )
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'dark', icon: 'circle', title: 'Dark' },
        { value: 'light', icon: 'circlehollow', title: 'Light' }
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
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

