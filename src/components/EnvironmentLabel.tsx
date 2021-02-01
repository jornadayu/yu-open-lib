import React from 'react'

import Chip from '@material-ui/core/Chip'
import CodeIcon from '@material-ui/icons/Code'
import { makeStyles } from '@material-ui/core/styles'

import { titleize } from '../helpers'
import { AppEnvironment } from '../types'

const useStyles = makeStyles((theme) => ({
  developmentBuild: {
    position: 'fixed',
    top: theme.spacing(11),
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
}

/**
 * Example usage:
 *
 * ```jsx
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
const EnvironmentLabel: React.FC<Props> = ({ environment, devTools }) => {
  const classes = useStyles({ environment })

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
