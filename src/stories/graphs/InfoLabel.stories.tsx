import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card } from '@mui/material'

import InfoLabel from '../../components/InfoLabel'

export default {
  title: 'Graphs/InfoLabel',
  component: InfoLabel
} as Meta<typeof InfoLabel>

const Template: StoryFn<typeof InfoLabel> = (args) => (
  <Card variant='outlined'>
    <InfoLabel {...args} />
  </Card>
)

export const NumberLabel = Template.bind({})
NumberLabel.args = {
  value: 455_320,
  text: 'Some Text'
}

export const TextLabel = Template.bind({})
TextLabel.args = {
  value: 'Some info',
  text: 'Some Text'
}
