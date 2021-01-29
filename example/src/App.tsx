import React from 'react'

import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { CopyableInput, AppTheme } from 'yu-lib'

import 'yu-lib/dist/index.css'

const theme = AppTheme({darkMode: false})

const App = () => {
  // const onConfirm = () => console.log('confirm')
  // const onCancel = () => console.log('cancel')
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <div>

      <Typography variant="h2">Texto exemplo</Typography>
      </div>
      {/* <ConfirmDialog handleClose={onCancel} handleConfirm={onConfirm} title="Some title" open text="Some text" cancelText="Cancelar" confirmText="Confirmar"></ConfirmDialog> */}

      <CopyableInput text="url.com" label="Some URL"></CopyableInput>
    </ThemeProvider>
  )
}

export default App
