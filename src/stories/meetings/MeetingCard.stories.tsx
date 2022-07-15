import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Button } from '@mui/material'

import MeetingCard, { Props } from '../../components/meetings/MeetingCard'

export default {
  title: 'meetings/MeetingCard',
  component: MeetingCard,
  parameters: {
    badges: ['Added: v2.4.2']
  }
} as ComponentMeta<typeof MeetingCard>

const Template: ComponentStory<typeof MeetingCard> = (args) => {
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

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const InterviwerView: Story<Props> = Template.bind({})
InterviwerView.args = {
  ...baseProps,
  showInterviewer: false
}

export const IntervieweeView: Story<Props> = Template.bind({})
IntervieweeView.args = {
  ...baseProps,
  showInterviewee: false
}

export const WithDate: Story<Props> = Template.bind({})
WithDate.args = {
  ...baseProps,
  startAt: new Date(2022, 12, 17, 3, 24, 0),
  endAt: new Date(2022, 12, 17, 3, 24, 0)
}
