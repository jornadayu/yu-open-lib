import React from 'react'

import Chip from '@material-ui/core/Chip'
import CodeIcon from '@material-ui/icons/Code'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { titleize } from '../helpers'
import { AppEnvironment } from '../types'

type StyleProps = {
  margin: number
  environment: Props['environment']
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  developmentBuild: {
    position: 'fixed',
    top: ({ margin }) => theme.spacing(margin),
    right: theme.spacing(2),
    color: 'white',
    backgroundColor: ({ environment }: { environment: Props['environment'] }) =>
      environment === 'development' ? '#66ab3e' : '#de4573'
  },
  developmentBuildIcon: {
    color: 'white'
  }
}))

type Props = {
  environment: AppEnvironment
  devTools?: React.ReactNode
  // @default 11
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
  const classes = useStyles({ environment, margin })

  if (environment === 'production') return null

  return (
    <React.Fragment>
      <Chip
        label={titleize(`${environment} build`)}
        icon={<CodeIcon className={classes.developmentBuildIcon} />}
        size='small'
        className={classes.developmentBuild}
      />

      {!!devTools && devTools}
    </React.Fragment>
  )
}

export default EnvironmentLabel
