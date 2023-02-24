import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import Welcome, { Props } from '../../components/welcome/Welcome'

export default {
  title: 'welcome/Welcome',
  component: Welcome,
  parameters: {
    badges: ['Added: v2.5.0']
  }
} as Meta<typeof Welcome>

const Template: StoryFn<typeof Welcome> = (args) => {
  return <Welcome {...args} />
}

const baseProps: Partial<Props> = {
  name: 'John Doe'
}

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}
