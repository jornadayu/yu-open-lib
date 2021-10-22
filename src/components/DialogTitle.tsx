import React from 'react'

import { Theme } from '@mui/material/styles'
import { WithStyles } from '@mui/styles'
import createStyles from '@mui/styles/createStyles'
import withStyles from '@mui/styles/withStyles'
import MuiDialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  })

export type Props = {
  id?: string
  children?: React.ReactNode
  onClose: () => void
}

/**
 * Custom DialogTitle to be used as a replacement to `MUI`'s base `DialogTitle`
 *
 * Has a (somewhat redundant) close button in the upper-right corner
 *
 * Uses JSX children as its left-aligned title instead of a string
 *
 * ```tsx
 * import { Dialog, DialogContent } from '@mui/material'
 * import { DialogTitle } from 'yu-open-lib'
 *
 * const MyComponent: React.FC = () => {
 *    const close = () => { ... }
 *
 *    return (
 *      <Dialog open onClose={close}>
 *        <DialogTitle onClose={close}>
 *          <Typography variant="h4">Some Custom Title</Typography>
 *        </DialogTitle>
 *
 *        <DialogContent>My Content</DialogContent>
 *      </Dialog>
 *    )
 * }
 *
 * export default MyComponent
 * ```
 */
const DialogTitle = withStyles(styles)(
  (props: Props & WithStyles<typeof styles>) => {
    const { children, classes, onClose, ...other } = props

    return (
      <MuiDialogTitle className={classes.root} {...other}>
        {!!children && <Typography variant='h6'>{children}</Typography>}

        {onClose ? (
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={onClose}
            size='large'
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  }
)

export default DialogTitle
