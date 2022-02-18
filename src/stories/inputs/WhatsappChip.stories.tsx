import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import WhatsappChip, { Props } from '../../components/inputs/WhatsappChip'

export default {
  title: 'Inputs/WhatsappChip',
  component: WhatsappChip
} as ComponentMeta<typeof WhatsappChip>

const Template: ComponentStory<typeof WhatsappChip> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <WhatsappChip {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  number: '551111111111111',
  message: 'Some Message'
}

export const OnClickEvent: Story<Props> = Template.bind({})
OnClickEvent.args = {
  number: '551111111111111',
  message: 'Some Message',
  onClick: () => alert('onClick')
}
