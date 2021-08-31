import React from 'react'

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from '@material-ui/core/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

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
 * Custom DialogTitle to be used as a replacement to `Material-UI`'s base `DialogTitle`
 *
 * Has a (somewhat redundant) close button in the upper-right corner
 *
 * Uses JSX children as its left-aligned title instead of a string
 *
 * ```tsx
 * import { Dialog, DialogContent } from '@material-ui/core'
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
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        {!!children && <Typography variant='h6'>{children}</Typography>}

        {onClose ? (
          <IconButton
            aria-label='close'
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    )
  }
)

export default DialogTitle
