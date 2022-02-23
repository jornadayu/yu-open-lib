import React from 'react'

import { TimelineConnector, TimelineDot, TimelineSeparator } from '@mui/lab'
import { Badge, Theme } from '@mui/material'
import { darken } from '@mui/material/styles'
import makeStyles from '@mui/styles/makeStyles'
import withStyles from '@mui/styles/withStyles'

import ClickableArea from '../ClickableArea'

type Props = {
  // Action for when the icon is clicked
  onClick?: () => void

  icon: React.ReactNode
  iconColor?: string

  // Count on badge above icon
  count?: number

  // If the the timeline item is the last in the timeline or not
  last?: boolean
}

type StyleProps = {
  action: boolean
  iconColor?: string
}

const StyledBadge = withStyles(() => ({
  badge: {
    top: 12,
    right: 0
  }
}))(Badge)

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  icon: {
    background: ({ iconColor }) => iconColor || 'initial',
    '&:hover': {
      background: ({ action, iconColor }) =>
        action && iconColor ? darken(iconColor, 0.3) : 'initial'
    }
  }
}))

const YuTimelineIcon: React.FC<Props> = ({
  onClick,
  last,
  icon,
  iconColor,
  count
}) => {
  const classes = useStyles({ action: !!onClick, iconColor })

  const dot = <TimelineDot className={classes.icon}>{icon}</TimelineDot>

  return (
    <TimelineSeparator>
      <React.Fragment>
        <StyledBadge badgeContent={count} color='primary'>
          {(onClick && (
            <ClickableArea onClick={onClick}>{dot}</ClickableArea>
          )) ||
            dot}
        </StyledBadge>

        {last || <TimelineConnector />}
      </React.Fragment>
    </TimelineSeparator>
  )
}

export default YuTimelineIcon
