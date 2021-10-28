import React from 'react'

import { styled } from '@mui/material/styles'

import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop'

const PREFIX = 'BackdropLoading'

const classes = {
  backdrop: `${PREFIX}-backdrop`
}

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  [`&.${classes.backdrop}`]: {
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
 * Similar example: https://mui.com/components/backdrop/#backdrop
 *
 * Mostly useful for mobile environments
 */
const BackdropLoading: React.FC<Props> = ({ open }) => (
  <StyledBackdrop className={classes.backdrop} open={open}>
    <CircularProgress color='inherit' />
  </StyledBackdrop>
)

export default BackdropLoading
