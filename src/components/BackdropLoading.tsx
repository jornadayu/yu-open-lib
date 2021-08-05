import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from '@material-ui/core/Backdrop'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

export type Props = {
  open: boolean
}

/**
 * A full-screen Backdrop loading component, also prevents user from doing any actions when active
 *
 * Similar example: https://material-ui.com/components/backdrop/#backdrop
 *
 * Mostly useful for mobile environments
 */
const BackdropLoading: React.FC<Props> = ({ open }) => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default BackdropLoading
