import React from 'react'

import { ConfirmDialog } from 'yu-lib'
import 'yu-lib/dist/index.css'

const App = () => {
  const onConfirm = () => console.log('confirm')
  const onCancel = () => console.log('cancel')

  return (
    <ConfirmDialog handleClose={onCancel} handleConfirm={onConfirm} title="Some title" open text="Some text" cancelText="Cancelar" confirmText="Confirmar"></ConfirmDialog>
  )
}

export default App
