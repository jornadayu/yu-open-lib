import React from 'react'

import dayjs from 'dayjs'

import DateRangeIcon from '@mui/icons-material/DateRange'
import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Chip,
  ChipProps,
  Link,
  Paper,
  Typography
} from '@mui/material'
import { SxProps, Theme } from '@mui/system'

export type Props = {
  /**
   * @default 'Meetings'
   */
  label?: string
  statusPrefixLabel?: string
  statusLabel: string
  interviewerName: string
  interviewerAvatarUrl?: string
  /**
   * @default 'Entrevistador: '
   */
  interviewerLabel?: string
  intervieweeName: string
  intervieweeAvatarUrl?: string
  /**
   * @default 'Entrevistado: '
   */
  intervieweeLabel?: string
  /**
   * @default true
   */
  showInterviewer?: boolean
  /**
   * @default true
   */
  showInterviewee?: boolean
  startAt?: Date
  endAt?: Date
  /**
   * @default 'Data: '
   */
  dateLabel?: string
  /**
   * @default 'Invite'
   */
  inviteUrl?: string
  inviteUrlLabel?: string
  /**
   * @default 'default'
   */
  statusChipColor?: ChipProps['color']
  statusChipProps?: Partial<ChipProps>
  inviteButtonProps?: Partial<ButtonProps>
  sx?: SxProps<Theme>
  children?: React.ReactNode
}

const MeetingCard: React.FC<Props> = ({
  label = 'Meetings',
  statusPrefixLabel,
  statusLabel,
  interviewerName,
  interviewerAvatarUrl,
  interviewerLabel = 'Entrevistador: ',
  intervieweeName,
  intervieweeAvatarUrl,
  intervieweeLabel = 'Entrevistado: ',
  showInterviewer = true,
  showInterviewee = true,
  startAt,
  endAt,
  dateLabel = 'Data: ',
  inviteUrl,
  inviteUrlLabel = 'Invite',
  statusChipColor = 'default',
  statusChipProps,
  inviteButtonProps,
  children,
  sx
}) => {
  return (
    <React.Fragment>
      <Paper variant='outlined' sx={{ p: 1, ...sx }}>
        <Typography sx={{ fontWeight: 'bolder' }}>{label}</Typography>

        <Box mt={1} />

        <Box display='flex' flexDirection='row' alignItems='center'>
          <Typography variant='body2'>{statusPrefixLabel}</Typography>
          <Chip
            color={statusChipColor}
            label={statusLabel}
            {...statusChipProps}
          />
        </Box>

        <Box mt={1} />

        {showInterviewer && (
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

        {showInterviewee && (
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

        {startAt && endAt && (
          <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
            <Typography variant='body2'>{dateLabel}</Typography>
            {dayjs(startAt).format('DD/MMM - HH:mm')}-
            {dayjs(endAt).format('HH:mm')}
          </Box>
        )}

        <Box mt={1} />

        {inviteUrl && (
          <Link href={inviteUrl} target='_blank'>
            <Button endIcon={<DateRangeIcon />} {...inviteButtonProps}>
              {inviteUrlLabel}
            </Button>
          </Link>
        )}
        {children}
      </Paper>

      <Box mt={1} />
    </React.Fragment>
  )
}

export default MeetingCard
