import React from 'react'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

import Loading from './Loading'

export type Props = {
  /** Dialog title */
  title: string

  /** Dialog body text */
  text?: string

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

  /**
   * Loading bar inside the dialog body
   * @default false
   */
  loading?: boolean

  /**
   * Confirm Button color
   * @default 'secondary'
   */
  confirmColor?: 'inherit' | 'primary' | 'secondary'

  /**
   * Cancel Button color
   * @default 'primary'
   */
  cancelColor?: 'inherit' | 'primary' | 'secondary'
}

/**
 * Generic confirmation/cancel dialog with callbacks for confirm and cancel actions
 *
 * Will render children in the `<DialogContent />` sub-component when passed
 */
const ConfirmDialog: React.FC<Props> = ({
  title,
  text,
  cancelText,
  confirmText,
  open,
  children,
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
            {!!text && <DialogContentText>{text}</DialogContentText>}

            {children}
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
