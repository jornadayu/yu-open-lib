import React from 'react'

import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'

import YuGrid from './YuGrid'

type Props = {
  /**
   * @default true
   */
  external?: boolean

  /**
   * @default 'Parece que a página que você está procurando não existe 😞'
   */
  message?: string

  /**
   * @default 'https://jornadayu.com'
   */
  url?: string
}

/**
 * Generic Not found error alert for 404 Pages, centered in a elevated grid with a background
 */
const NotFound: React.FC<Props> = ({
  external = true,
  message = 'Parece que a página que você está procurando não existe 😞',
  url = 'https://jornadayu.com'
}) => (
  <YuGrid>
    <Alert
      variant='filled'
      severity='error'
      action={
        <Button
          variant='contained'
          color='primary'
          href={external ? url : '/'}
          size='small'
        >
          Ínicio
        </Button>
      }
    >
      {message}
    </Alert>
  </YuGrid>
)

export default NotFound
