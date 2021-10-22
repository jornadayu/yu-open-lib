import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card } from '@mui/material'

import InfoLabel, { Props } from '../components/InfoLabel'

export default {
  title: 'Components/InfoLabel',
  component: InfoLabel
} as ComponentMeta<typeof InfoLabel>

const Template: ComponentStory<typeof InfoLabel> = (args) => (
  <Card variant='outlined'>
    <InfoLabel {...args} />
  </Card>
)

export const NumberLabel: Story<Props> = Template.bind({})
NumberLabel.args = {
  value: 455_320,
  text: 'Some Text'
}

export const TextLabel: Story<Props> = Template.bind({})
TextLabel.args = {
  value: 'Some info',
  text: 'Some Text'
}
