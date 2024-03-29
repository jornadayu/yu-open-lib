import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Button } from '@mui/material'

import MeetingCard, { Props } from '../../components/meetings/MeetingCard'

export default {
  title: 'meetings/MeetingCard',
  component: MeetingCard,
  parameters: {
    badges: ['Added: v2.4.2']
  }
} as Meta<typeof MeetingCard>

const Template: StoryFn<typeof MeetingCard> = (args) => {
  return (
    <div>
      <MeetingCard {...args} statusLabel='Agendada' statusChipColor='success' />
      <MeetingCard {...args} statusLabel='Conflito' statusChipColor='error' />
      <MeetingCard
        {...args}
        statusLabel='Agendada (sem link)'
        statusChipColor='warning'
      />
      <MeetingCard
        {...args}
        statusLabel='Agendada (sem link)'
        statusChipColor='warning'
      >
        <Button>Agendar</Button>
      </MeetingCard>
    </div>
  )
}

const baseProps: Partial<Props> = {
  interviewerName: 'Some person',
  interviewerAvatarUrl: 'link photo',
  intervieweeName: 'Another person',
  intervieweeAvatarUrl: 'link photo'
}

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}

export const InterviwerView = Template.bind({})
InterviwerView.args = {
  ...baseProps,
  showInterviewer: false
}

export const IntervieweeView = Template.bind({})
IntervieweeView.args = {
  ...baseProps,
  showInterviewee: false
}

export const WithDate = Template.bind({})
WithDate.args = {
  ...baseProps,
  startAt: new Date(2022, 12, 17, 12, 0, 0),
  endAt: new Date(2022, 12, 17, 12, 30, 0)
}
