import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Email as EmailIcon } from '@mui/icons-material'
import { Card, CardContent } from '@mui/material'

import CopyableButton from '../../components/inputs/CopyableButton'

export default {
  title: 'Inputs/CopyableButton',
  component: CopyableButton
} as Meta<typeof CopyableButton>

const Template: StoryFn<typeof CopyableButton> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        Some Thing <CopyableButton {...args} />
      </CardContent>
    </Card>
  )
}

export const Example = Template.bind({})
Example.args = {
  text: 'Some text to copy'
}

export const WithCustomIcon = Template.bind({})
WithCustomIcon.args = {
  text: 'Some text to copy',
  icon: <EmailIcon />
}

export const WithCustomFormat = Template.bind({})
WithCustomFormat.args = {
  text: `
  <div>
    some <strong>text</strong> <p style="color: blue">in blue</p>

    and some text <p style="text-decoration: underline">underlined</p>
  </div>
  `,
  icon: <EmailIcon />,
  format: 'text/html'
}
