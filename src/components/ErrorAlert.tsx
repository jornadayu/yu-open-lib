import React from 'react'

import Alert from '@mui/material/Alert'
import Grid, { GridProps } from '@mui/material/Grid'

type Props = {
  message?: string
} & GridProps

/**
 * Centered alert for page error messages (ex.: 'Error when loading <some resource>, try again later')
 */
const ErrorAlert: React.FC<Props> = ({
  message,
  children,
  ...gridItemProps
}) => (
  <Grid container spacing={2} justifyContent='center'>
    <Grid item md={4} sm={8} xs={12} {...gridItemProps}>
      <Alert variant='outlined' severity='error'>
        {message}
        {children}
      </Alert>
    </Grid>
  </Grid>
)

export default ErrorAlert
