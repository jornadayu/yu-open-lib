import React from 'react'

import { ThemeProvider } from '@material-ui/core/styles'
import AppTheme from '../../theme/AppTheme'

import BaseAppBar, { Props } from './BaseAppBar'

const YuAppBar: React.FC<Props> = (props) => {
  const theme = AppTheme({ darkMode: false })

  return (
    <ThemeProvider theme={theme}>
      <BaseAppBar {...props} />
    </ThemeProvider>
  )
}

export default YuAppBar
