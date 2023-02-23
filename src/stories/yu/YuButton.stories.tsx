import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import YuButton, { Props } from '../../components/yu/YuButton'

export default {
  title: 'YU/Button',
  component: YuButton,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as Meta<typeof YuButton>

const Template: StoryFn<typeof YuButton> = (args) => {
  return <YuButton {...args} />
}

const baseProps: Partial<Props> = {
  children: 'Some Text'
}

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}

export const Contained = Template.bind({})
Contained.args = {
  ...baseProps,
  variant: 'contained'
}

export const Outlined = Template.bind({})
Outlined.args = {
  ...baseProps,
  variant: 'outlined'
}
