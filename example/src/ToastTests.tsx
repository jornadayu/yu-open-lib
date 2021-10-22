import React from 'react'

import { Button } from '@mui/material'
import { useToasts } from 'react-toast-notifications'

const ToastTests: React.FC = () => {
  const { addToast } = useToasts()

  return (
    <React.Fragment>
      <Button color="primary" onClick={() => addToast('Success Toast', { appearance: 'success' })}>
        Success Toast
      </Button>

      <Button color="secondary" onClick={() => addToast('Error Toast', { appearance: 'error' })}>
        Error Toast
      </Button>
    </React.Fragment>
  )
}

export default ToastTests
