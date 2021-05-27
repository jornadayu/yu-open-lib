import React from 'react'

import {
  makeStyles,
  Paper,
  Typography,
  Theme,
  darken,
  PaperProps
} from '@material-ui/core'
import { TimelineContent } from '@material-ui/lab'

import ClickableArea from '../ClickableArea'
import { useViewport } from '../../hooks'

type Props = {
  title: string
  description?: string
  onClick?: () => any
  containerStyles?: React.CSSProperties

  /**
   * If the item should have a Paper container or not
   * @default true
   */
  container?: boolean
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

const YuTimelineContent: React.FC<Props & PaperProps> = ({
  title,
  description,
  children,
  onClick,
  containerStyles,
  container = true,
  ...paperProps
}) => {
  const { isMobile } = useViewport()
  const classes = useStyles({ isMobile })

  const content = (
    <>
      <Typography variant='h6' component='h1'>
        {title}
      </Typography>

      {description && (
        <Typography variant='subtitle1'>{description}</Typography>
      )}

      {children}
    </>
  )

  const paper = (
    <Paper
      elevation={3}
      className={classes.paper}
      style={containerStyles}
      {...paperProps}
    >
      {content}
    </Paper>
  )

  if (onClick) {
    return (
      <TimelineContent>
        <ClickableArea onClick={onClick}>
          {(container && paper) || content}
        </ClickableArea>
      </TimelineContent>
    )
  }

  return <TimelineContent>{(container && paper) || content}</TimelineContent>
}

export default YuTimelineContent
