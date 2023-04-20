import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import VCardQRCode, { Props } from '../../components/inputs/VCardQRCode'

export default {
  title: 'Inputs/VCardQRCode',
  component: VCardQRCode
} as Meta<typeof VCardQRCode>

const Template: StoryFn<typeof VCardQRCode> = (args) => {
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
  revisionDate: new Date('2021-01-01')
}

export const Example = Template.bind({})
Example.args = {
  ...baseProps,
  size: 128
}

export const WithoutMargin = Template.bind({})
WithoutMargin.args = {
  ...baseProps,
  includeMargin: false,
  size: 128
}

export const BiggerSize = Template.bind({})
BiggerSize.args = {
  ...baseProps,
  size: 512
}
