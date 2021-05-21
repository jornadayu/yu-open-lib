import React from 'react'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import { Typography, makeStyles } from '@material-ui/core'
import { TimelineOppositeContent } from '@material-ui/lab'

dayjs.extend(relativeTime)

type Props = {
  date: Date
}

const useStyles = makeStyles(() => ({
  date: {
    marginTop: '0.9em'
  }
}))

const YuTimelineDate: React.FC<Props> = ({ date }) => {
  const classes = useStyles()

  return (
    <TimelineOppositeContent>
      <Typography
        variant='body2'
        color='textSecondary'
        className={classes.date}
      >
        {dayjs(date).format('DD/MM')}, {dayjs(date).from(dayjs())}
      </Typography>
    </TimelineOppositeContent>
  )
}

export default YuTimelineDate
