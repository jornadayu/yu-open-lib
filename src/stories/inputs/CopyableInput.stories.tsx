import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import CopyableInput, { Props } from '../../components/inputs/CopyableInput'

export default {
  title: 'Inputs/CopyableInput',
  component: CopyableInput
} as Meta<typeof CopyableInput>

const Template: StoryFn<typeof CopyableInput> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <CopyableInput {...args} />
      </CardContent>
    </Card>
  )
}

const baseProps: Partial<Props> = {
  text: 'https://google.com',
  label: 'Some URL'
}

export const Example = Template.bind({})
Example.args = {
  ...baseProps
}

export const FullWidth = Template.bind({})
FullWidth.args = {
  ...baseProps,
  fullWidth: true
}

export const CustomTooltip = Template.bind({})
CustomTooltip.args = {
  ...baseProps,
  tooltip: 'Copy this specific text'
}

export const SecondaryColor = Template.bind({})
SecondaryColor.args = {
  ...baseProps,
  color: 'secondary'
}
