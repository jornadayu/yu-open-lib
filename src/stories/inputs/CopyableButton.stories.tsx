import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Email as EmailIcon } from '@mui/icons-material'
import { Card, CardContent } from '@mui/material'

import CopyableButton, { Props } from '../../components/inputs/CopyableButton'

export default {
  title: 'Inputs/CopyableButton',
  component: CopyableButton
} as ComponentMeta<typeof CopyableButton>

const Template: ComponentStory<typeof CopyableButton> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        Some Thing <CopyableButton {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  text: 'Some text to copy'
}

export const WithCustomIcon: Story<Props> = Template.bind({})
WithCustomIcon.args = {
  text: 'Some text to copy',
  icon: <EmailIcon />
}

export const WithCustomFormat: Story<Props> = Template.bind({})
WithCustomFormat.args = {
  text: '<b>Some text to copy</b>',
  icon: <EmailIcon />,
  format: 'text/html'
}
