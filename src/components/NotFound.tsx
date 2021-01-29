import React from 'react'

import Alert from '@material-ui/lab/Alert'
import Button from '@material-ui/core/Button'

import YuGrid from './YuGrid'

type Props = {
  external?: boolean
  url?: string
}

const NotFound: React.FC<Props> = ({
  external = true,
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
      Parece que a página que você está procurando não existe 😞
    </Alert>
  </YuGrid>
)

export default NotFound
