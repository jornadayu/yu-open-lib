import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import VCardQRCode, { Props } from '../../components/inputs/VCardQRCode'

export default {
  title: 'Inputs/VCardQRCode',
  component: VCardQRCode
} as ComponentMeta<typeof VCardQRCode>

const Template: ComponentStory<typeof VCardQRCode> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <VCardQRCode {...args} />
      </CardContent>
    </Card>
  )
}

const baseProps: Partial<Props> = {
  contact: {
    fullName: 'First Middle Last',
    lastName: 'Last',
    firstName: 'First',
    email: 'some_email@email.com',
    phoneNumber: '+5511123456789'
  },
  revisionDate: new Date()
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps,
  size: 128
}

export const WithoutMargin: Story<Props> = Template.bind({})
WithoutMargin.args = {
  ...baseProps,
  includeMargin: false,
  size: 128
}

export const BiggerSize: Story<Props> = Template.bind({})
BiggerSize.args = {
  ...baseProps,
  size: 512
}
