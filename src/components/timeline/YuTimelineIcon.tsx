import React from 'react'

import { makeStyles, withStyles, Theme, Badge } from '@material-ui/core'
import { darken } from '@material-ui/core/styles'
import {
  TimelineConnector,
  TimelineDot,
  TimelineSeparator
} from '@material-ui/lab'

import ClickableArea from '../ClickableArea'

type Props = {
  // Action for when the icon is clicked
  onClick: () => void

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

  return (
    <TimelineSeparator>
      <StyledBadge badgeContent={count} color='primary'>
        <ClickableArea onClick={onClick}>
          <TimelineDot className={classes.icon}>{icon}</TimelineDot>
        </ClickableArea>
      </StyledBadge>

      {last || <TimelineConnector />}
    </TimelineSeparator>
  )
}

export default YuTimelineIcon
