import React, { useMemo } from 'react'

import dayjs from 'dayjs'

import { Avatar, Button, Chip, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

export type Props = {
  status: string
  label?: { label: string; value: string }[]
  statusLabel?: { label: string; value: string }[]
  interviewer: string
  interviewerId: string | number
  interviewerName: string
  interviewerAvatarUrl: string
  interviewerLabel?: { label: string; value: string }[]
  intervieweeId: string | number
  intervieweeName: string
  intervieweeAvatarUrl: string
  intervieweeLabel?: { label: string; value: string }[]
  startAt?: string
  endAt?: string
  dateLabel?: { label: string; value: string }[]
  inviteUrl?: string
  inviteUrlLabel?: { label: string; value: string }[]
  userId: string | number
  statusOptions: any[]
}

const PersonMeeting: React.FC<Props> = ({
  status,
  label = 'Meetings',
  statusLabel = 'Status: ',
  interviewerId,
  interviewerName,
  interviewerAvatarUrl,
  interviewerLabel = 'Entrevistador: ',
  intervieweeId,
  intervieweeName,
  intervieweeAvatarUrl,
  intervieweeLabel = 'Entrevistado: ',
  startAt,
  endAt,
  dateLabel = 'Data: ',
  inviteUrl,
  inviteUrlLabel = 'Invite',
  userId,
  statusOptions
}) => {
  const statusChipColor = useMemo(() => {
    switch (status) {
      case 'scheduled':
        return 'success'
      case 'finished':
        return 'primary'
      case 'error':
        return 'error'
      case 'scheduled_without_invite':
        return 'warning'
      case 'canceled':
        return 'error'
      case 'pending':
        return 'default'
      default:
        return 'default'
    }
  }, [status])

  return (
    <React.Fragment>
      <Paper variant='outlined' sx={{ p: 1 }}>
        <Typography sx={{ fontWeight: 'bolder' }}>{label}</Typography>

        <Box mt={1} />

        <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
          <Typography variant='body2'>{statusLabel}</Typography>
          <Chip
            color={statusChipColor}
            label={statusOptions?.find(({ value }) => status === value)?.label}
          />
        </Box>

        <Box mt={1} />

        {userId?.toString() !== interviewerId.toString() && (
          <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
            <Typography variant='body2'>{interviewerLabel}</Typography>
            {interviewerName}
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt={interviewerName}
              src={interviewerAvatarUrl}
            />
          </Box>
        )}

        {userId?.toString() !== intervieweeId.toString() && (
          <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
            <Typography variant='body2'>{intervieweeLabel}</Typography>
            {intervieweeName}
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt={intervieweeName}
              src={intervieweeAvatarUrl}
            />
          </Box>
        )}

        <Box mt={1} />

        <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
          <Typography variant='body2'>{dateLabel}</Typography>
          {dayjs(startAt).format('DD/MMM - HH:mm')}-
          {dayjs(endAt).format('HH:mm')}
        </Box>

        <Box mt={1} />

        <Button component='a' href={inviteUrl} target='_blank'>
          {inviteUrlLabel}
        </Button>
      </Paper>

      <Box mt={1} />
    </React.Fragment>
  )
}

export default PersonMeeting
