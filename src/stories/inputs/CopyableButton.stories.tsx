import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
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
