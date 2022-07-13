import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import Welcome, { Props } from '../../components/welcome/Welcome'

export default {
  title: 'welcome/Welcome',
  component: Welcome,
  parameters: {
    badges: ['Added: v2.5.0']
  }
} as ComponentMeta<typeof Welcome>

const Template: ComponentStory<typeof Welcome> = (args) => {
  return <Welcome {...args} />
}

const baseProps: Partial<Props> = {
  name: 'John Doe'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}
