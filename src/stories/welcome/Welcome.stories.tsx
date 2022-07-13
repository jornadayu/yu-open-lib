import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { BADGES } from '../../../.storybook/constants'
import Welcome, { Props } from '../../components/welcome/Welcome'

export default {
  title: 'welcome/Welcome',
  component: Welcome,
  parameters: {
    badges: [BADGES.UNRELEASED]
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
