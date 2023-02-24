import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import WhatsappChip from '../../components/inputs/WhatsappChip'

export default {
  title: 'Inputs/WhatsappChip',
  component: WhatsappChip
} as Meta<typeof WhatsappChip>

const Template: StoryFn<typeof WhatsappChip> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <WhatsappChip {...args} />
      </CardContent>
    </Card>
  )
}

export const Example = Template.bind({})
Example.args = {
  number: '551111111111111',
  message: 'Some Message'
}

export const OnClickEvent = Template.bind({})
OnClickEvent.args = {
  number: '551111111111111',
  message: 'Some Message',
  onClick: () => alert('onClick')
}
