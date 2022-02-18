import React from 'react'

import {
  DefaultToastContainer,
  ToastContainerProps,
  ToastProps,
  ToastProvider
} from 'react-toast-notifications'

import Alert from '@mui/material/Alert'

export const Toast: React.FC<ToastProps> = ({
  appearance,
  children,
  onDismiss
}) => (
  <Alert
    style={{ margin: 10 }}
    variant='filled'
    severity={appearance}
    onClose={() => onDismiss()}
  >
    {children}
  </Alert>
)

export const ToastContainer: React.FC<ToastContainerProps> = (props) => (
  <DefaultToastContainer style={{ zIndex: 5000 }} {...props} />
)

type ProviderProps = {
  autoDismissTimeout?: number
}

/**
 * A Custom ToastProvider for the 'react-toast-notifications' library, having a
 * customized MUI React closable Alert in place of the default toasts
 *
 * For more information: https://github.com/jossmac/react-toast-notifications/#use
 */
const YuToastProvider: React.FC<ProviderProps> = ({
  autoDismissTimeout = 3500,
  children
}) => (
  <ToastProvider
    components={{ Toast, ToastContainer }}
    autoDismiss
    autoDismissTimeout={autoDismissTimeout}
    placement='bottom-center'
  >
    {children}
  </ToastProvider>
)

export default YuToastProvider
