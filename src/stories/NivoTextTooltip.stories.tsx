import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import NivoTextTooltip from '../components/graphs/NivoTextTooltip'

export default {
  title: 'Graphs/NivoTextTooltip',
  component: NivoTextTooltip,
  argTypes: {
    color: { control: 'color' }
  }
} as ComponentMeta<typeof NivoTextTooltip>

const Template: ComponentStory<typeof NivoTextTooltip> = (args) => (
  <NivoTextTooltip {...args} />
)

export const StringValue = Template.bind({})
StringValue.args = {
  text: 'Some value',
  value: '55.45',
  color: '#fff'
}

export const PercentageValue = Template.bind({})
PercentageValue.args = {
  text: 'Some percentage value',
  value: 0.55,
  color: '#fff',
  isPercentage: true
}
