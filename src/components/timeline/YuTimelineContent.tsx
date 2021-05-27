import React from 'react'

import { makeStyles, Paper, Typography, Theme, darken } from '@material-ui/core'
import { TimelineContent } from '@material-ui/lab'

import ClickableArea from '../ClickableArea'
import { useViewport } from '../../hooks'

type Props = {
  title: string
  description?: string
  onClick?: () => any
  containerStyles?: React.CSSProperties
  component?: React.ElementType<React.HTMLAttributes<HTMLElement>>
}

type StyleProps = {
  isMobile: boolean
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  paper: {
    padding: '6px 16px',
    width: ({ isMobile }) => (isMobile ? 160 : 'initial'),
    '&:hover': {
      background: darken(theme.palette.background.paper, 0.2)
    }
  }
}))

const YuTimelineContent: React.FC<Props> = ({
  title,
  description,
  children,
  onClick,
  containerStyles,
  component = Paper
}) => {
  const { isMobile } = useViewport()
  const classes = useStyles({ isMobile })

  const paper = (
    <Paper
      component={component}
      elevation={3}
      className={classes.paper}
      style={containerStyles}
    >
      <Typography variant='h6' component='h1'>
        {title}
      </Typography>

      {description && (
        <Typography variant='subtitle1'>{description}</Typography>
      )}

      {children}
    </Paper>
  )

  if (onClick) {
    return (
      <TimelineContent>
        <ClickableArea onClick={onClick}>{paper}</ClickableArea>
      </TimelineContent>
    )
  }

  return <TimelineContent>{paper}</TimelineContent>
}

export default YuTimelineContent
