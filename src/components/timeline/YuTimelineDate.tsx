import React from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { TimelineOppositeContent } from '@mui/lab'

dayjs.extend(relativeTime)

type Props = {
  date: Date
  className?: string
  dateStyles?: React.CSSProperties
  style?: React.CSSProperties
}

const useStyles = makeStyles(() => ({
  date: {
    marginTop: '0.9em'
  }
}))

const YuTimelineDate: React.FC<Props> = ({
  date,
  style,
  className,
  dateStyles
}) => {
  const classes = useStyles()

  return (
    <TimelineOppositeContent className={className} style={style}>
      <Typography
        variant='body2'
        color='textSecondary'
        className={classes.date}
        style={dateStyles}
      >
        {dayjs(date).format('DD/MM')}, {dayjs(date).from(dayjs())}
      </Typography>
    </TimelineOppositeContent>
  )
}

export default YuTimelineDate
