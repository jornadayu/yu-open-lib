import React from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

import { PropTypes } from '@material-ui/core'

import Loading from './Loading'

type Props = {
  /** Dialog title */
  title: string

  /** Dialog body text */
  text: string

  /** Text on the Cancel button */
  cancelText: string

  /** Text on the Confirm button */
  confirmText: string

  /** If the dialog should be open or not */
  open: boolean

  /** Action when closing/cancelling the Dialog */
  handleClose: () => void

  /** Action when confirming the Dialog action */
  handleConfirm: () => void

  /** URL to go with the Confirm button, instead of a Confirm action */
  path?: string

  /** Loading bar inside the dialog body */
  loading?: boolean

  /** Confirm Button color */
  confirmColor?: PropTypes.Color

  /** Cancel Button color */
  cancelColor?: PropTypes.Color
}

/**
 * A Material-UI base confirmation dialog with callbacks for a
 * confirm and cancel actions
 */
const ConfirmDialog: React.FC<Props> = ({
  title,
  text,
  cancelText,
  confirmText,
  open,
  handleClose,
  handleConfirm,
  path,
  loading = false,
  confirmColor = 'secondary',
  cancelColor = 'primary'
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>

      {(loading && <Loading loading />) || (
        <React.Fragment>
          <DialogContent>
            <DialogContentText>{text}</DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color={cancelColor} autoFocus>
              {cancelText}
            </Button>

            <Button href={path} onClick={handleConfirm} color={confirmColor}>
              {confirmText}
            </Button>
          </DialogActions>
        </React.Fragment>
      )}
    </Dialog>
  )
}

export default ConfirmDialog
