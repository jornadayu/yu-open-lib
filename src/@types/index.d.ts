import { Placement } from 'react-toast-notifications'

declare module 'react-toast-notifications' {
  // Temporary fix, waiting for https://github.com/jossmac/react-toast-notifications/pull/152 to be merged
  export interface ToastContainerProps
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    > {
    children: React.ReactNode
    hasToasts: boolean
    placement: Placement
  }
}
