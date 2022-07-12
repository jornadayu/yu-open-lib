import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import PersonMeeting, { Props } from '../../components/meetings/PersonMeeting'

export default {
  title: 'meetings/PersonMeeting',
  component: PersonMeeting,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof PersonMeeting>

const Template: ComponentStory<typeof PersonMeeting> = (args) => {
  return <PersonMeeting {...args} />
}

const baseProps: Partial<Props> = {
  status: 'scheduled',
  interviewerName: 'Some person',
  interviewerId: '111',
  interviewerAvatarUrl: 'link photo',
  intervieweeName: 'Another person',
  intervieweeId: '222',
  intervieweeAvatarUrl: 'link photo',
  userId: '1604',
  statusOptions: [
    { value: 'scheduled', label: 'Agendada' },
    { value: 'finished', label: 'Realizada' },
    { value: 'error', label: 'Conflito' },
    { value: 'scheduled_without_invite', label: 'Agendada (Sem Link)' },
    { value: 'canceled', label: 'Cancelada' },
    { value: 'pending', label: 'Pendente' }
  ],
  statusLabel: 'Status: ',
  label: 'Meetings',
  interviewerLabel: 'Entrevistador: ',
  intervieweeLabel: 'Entrevistado: ',
  dateLabel: 'Data: ',
  inviteUrlLabel: 'Link'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const InterviwerView: Story<Props> = Template.bind({})
InterviwerView.args = {
  ...baseProps,
  userId: '111',
  interviewerId: '111'
}

export const IntervieweeView: Story<Props> = Template.bind({})
IntervieweeView.args = {
  ...baseProps,
  userId: '222',
  intervieweeId: '222'
}
