import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card, CardContent } from '@material-ui/core'

import VCardQRCode, { Props } from '../components/VCardQRCode'

export default {
  title: 'Other/VCardQRCode',
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

export const Example: Story<Props> = Template.bind({})
Example.args = {
  contact: {
    fullName: 'First Middle Last',
    lastName: 'Last',
    firstName: 'First',
    email: 'some_email@email.com',
    phoneNumber: '+5511123456789'
  },
  revisionDate: new Date(),
  size: 128
}
