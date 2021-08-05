import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card, CardContent } from '@material-ui/core'

import CopyableInput, { Props } from '../components/CopyableInput'

export default {
  title: 'Other/CopyableInput',
  component: CopyableInput
} as ComponentMeta<typeof CopyableInput>

const Template: ComponentStory<typeof CopyableInput> = (args) => {
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

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps
}

export const FullWidth: Story<Props> = Template.bind({})
FullWidth.args = {
  ...baseProps,
  fullWidth: true
}

export const CustomTooltip: Story<Props> = Template.bind({})
CustomTooltip.args = {
  ...baseProps,
  tooltip: 'Copy this specific text'
}

export const SecondaryColor: Story<Props> = Template.bind({})
SecondaryColor.args = {
  ...baseProps,
  color: 'secondary'
}
