import React from 'react'

import CodeIcon from '@mui/icons-material/Code'
import Chip from '@mui/material/Chip'

import { titleize } from '../helpers'
import { AppEnvironment } from '../types'

type Props = {
  environment: AppEnvironment
  devTools?: React.ReactNode
  /**
   * @default 11
   */
  margin?: number
}

/**
 * Floating Environment label to be used to differ staging/development/production environments
 * Never shows if the received environment is 'production'
 *
 * Example usage:
 *
 * ```tsx
 * import { EnvironmentLabel } from 'yu-lib'
 * import { ReactQueryDevtools } from 'react-query/devtools'
 *
 * const App = () => {
 *   const { environment } = useSomeContext()
 *
 *   return (
 *     <EnvironmentLabel
 *       environment={environment}
 *       devTools={<ReactQueryDevtools initialIsOpen={false} />}
 *     />
 *   )
 * }
 * ```
 */
const EnvironmentLabel: React.FC<Props> = ({
  environment,
  devTools,
  margin = 11
}) => {
  if (environment === 'production') return null

  return (
    <React.Fragment>
      <Chip
        label={titleize(`${environment} build`)}
        icon={<CodeIcon sx={{ color: 'white' }} />}
        size='small'
        sx={{
          position: 'fixed',
          top: 8 * margin,
          right: 16,
          color: 'white',
          backgroundColor: environment === 'development' ? '#66ab3e' : '#de4573'
        }}
      />

      {!!devTools && devTools}
    </React.Fragment>
  )
}

export default EnvironmentLabel
