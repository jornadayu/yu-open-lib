import React from 'react'

import Grid, { GridProps } from '@material-ui/core/Grid'
import Alert from '@material-ui/lab/Alert'

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
  <Grid container spacing={2} justify='center'>
    <Grid item md={4} sm={8} xs={12} {...gridItemProps}>
      <Alert variant='outlined' severity='error'>
        {message}
        {children}
      </Alert>
    </Grid>
  </Grid>
)

export default ErrorAlert
