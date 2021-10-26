import React from 'react'

import MuiDialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import { grey } from '@mui/material/colors'

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
const DialogTitle: React.FC<Props> = ({
  children,
  onClose,
  ...dialogTitleProps
}) => (
  <MuiDialogTitle sx={{ p: 2, m: 0 }} {...dialogTitleProps}>
    {!!children && <Typography variant='h6'>{children}</Typography>}

    {onClose ? (
      <IconButton
        aria-label='close'
        onClick={onClose}
        size='large'
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: grey[500]
        }}
      >
        <CloseIcon />
      </IconButton>
    ) : null}
  </MuiDialogTitle>
)

export default DialogTitle
