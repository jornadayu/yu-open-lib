import React from 'react'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  Typography
} from '@mui/material'

import DialogTitle from '../DialogTitle'
import Loading from '../loaders/Loading'

export type BaseDialogProps = {
  open: boolean
  onClose?: () => void
  title: string
  actions?: React.ReactChild | React.ReactChildren | (() => React.ReactElement)
  /** @default false */
  loading?: boolean
} & DialogProps

/**
 * ```tsx
 * const MyComponent: React.FC = () => {
 *   const [dialog, toggleDialog] = useToggle(false)
 *   const isLoading = false
 *
 *   return (
 *     <BaseDialog
 *       title="Some Title"
 *       open={dialog}
 *       onClose={toggleDialog}
 *       loading={isLoading}
 *       actions={
 *         <>
 *           <Button onClick={toggleDialog}>Yes</Button>
 *           <Button onClick={toggleDialog}>No</Button>
 *         </>
 *       }
 *     >
 *       <div>
 *         Do Thing?
 *       </div>
 *     </BaseDialog>
 *   )
 * }
 * ```
 */
const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  onClose,
  actions,
  title,
  children,
  loading = false,
  ...dialogProps
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    maxWidth='md'
    fullWidth
    {...dialogProps}
  >
    <DialogTitle onClose={() => onClose?.()}>
      <Typography variant='h5' sx={{ ml: 2 }}>
        {title}
      </Typography>
    </DialogTitle>

    <DialogContent>
      {loading ? <Loading loading={loading} /> : children}
    </DialogContent>

    {!!actions && <DialogActions>{actions}</DialogActions>}
  </Dialog>
)

export default BaseDialog
