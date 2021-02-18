import React from 'react'

import Alert from '@material-ui/lab/Alert'

import {
  ToastProvider,
  DefaultToastContainer,
  ToastContainerProps,
  ToastProps
} from 'react-toast-notifications'

export const Toast: React.FC<ToastProps> = ({
  appearance,
  children,
  onDismiss
}) => (
  <Alert variant='filled' severity={appearance} onClose={() => onDismiss()}>
    {children}
  </Alert>
)

export const ToastContainer: React.FC<ToastContainerProps> = (props) => (
  <DefaultToastContainer style={{ zIndex: 5000 }} {...props} />
)

type ProviderProps = {
  autoDismissTimeout?: number
}

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
