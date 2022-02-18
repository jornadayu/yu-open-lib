import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import YuButton, { Props } from '../../components/yu/YuButton'

export default {
  title: 'YU/Button',
  component: YuButton,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof YuButton>

const Template: ComponentStory<typeof YuButton> = (args) => {
  return <YuButton {...args} />
}

const baseProps: Partial<Props> = {
  children: 'Some Text'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const Contained: Story<Props> = Template.bind({})
Contained.args = {
  ...baseProps,
  variant: 'contained'
}

export const Outlined: Story<Props> = Template.bind({})
Outlined.args = {
  ...baseProps,
  variant: 'outlined'
}
