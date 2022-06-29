import React from 'react'

import {
  Button,
  ButtonProps,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle
} from '@mui/material'

import Loading from './loaders/Loading'

export type Props = {
  /** Dialog title */
  title: React.ReactNode
  /** Dialog body text */
  text?: React.ReactNode
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
  confirmColor?: ButtonProps['color']
  /**
   * Cancel Button color
   * @default 'primary'
   */
  cancelColor?: ButtonProps['color']
  renderCancelButton?: (props: ButtonProps) => React.ReactNode
  renderConfirmButton?: (props: ButtonProps) => React.ReactNode
  renderActions?: (props: {
    handleClose: Props['handleClose']
    handleConfirm: Props['handleConfirm']
    loading: Props['loading']
  }) => React.ReactNode
} & DialogProps

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
  cancelColor = 'primary',
  renderCancelButton = (buttonProps) => (
    <Button autoFocus {...buttonProps}>
      {cancelText}
    </Button>
  ),
  renderConfirmButton = (buttonProps) => (
    <Button {...buttonProps}>{confirmText}</Button>
  ),
  renderActions,
  ...dialogProps
}) => {
  return (
    <Dialog open={open} onClose={handleClose} {...dialogProps}>
      <DialogTitle>{title}</DialogTitle>

      {(loading && <Loading loading />) || (
        <React.Fragment>
          <DialogContent>
            {!!text && <DialogContentText>{text}</DialogContentText>}

            {children}
          </DialogContent>

          <DialogActions>
            {renderActions ? (
              renderActions({ handleClose, handleConfirm, loading })
            ) : (
              <React.Fragment>
                {renderCancelButton({
                  onClick: handleClose,
                  color: cancelColor
                })}

                {renderConfirmButton({
                  onClick: handleConfirm,
                  color: confirmColor,
                  href: path
                })}
              </React.Fragment>
            )}
          </DialogActions>
        </React.Fragment>
      )}
    </Dialog>
  )
}

export default ConfirmDialog
