import React, { useState } from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card, Button, CardContent } from '@material-ui/core'

import ConfirmDialog, { Props } from '../components/ConfirmDialog'

export default {
  title: 'Other/ConfirmDialog',
  component: ConfirmDialog
} as ComponentMeta<typeof ConfirmDialog>

const Template: ComponentStory<typeof ConfirmDialog> = (args) => {
  const [open, setOpen] = useState(false)

  return (
    <Card variant='outlined'>
      <CardContent>
        <Button variant='outlined' onClick={() => setOpen(true)}>
          Open Dialog
        </Button>
      </CardContent>

      <ConfirmDialog
        {...args}
        open={open}
        handleConfirm={() => {
          alert('confirmed')
          setOpen(false)
        }}
        handleClose={() => {
          alert('closed')
          setOpen(false)
        }}
      />
    </Card>
  )
}

const baseProps: Partial<Props> = {
  title: 'Dialog Title',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  text: 'Do you want to confirm?'
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps
}

export const LoadingConfirmation: Story<Props> = Template.bind({})
LoadingConfirmation.args = {
  ...baseProps,
  loading: true
}

export const CustomChildren: Story<
  Props & { children?: React.ReactNode }
> = Template.bind({})
CustomChildren.args = {
  ...baseProps,
  children: (
    <div>
      custom <strong>dialog</strong> <em>content</em> with{' '}
      <span style={{ color: 'red' }}>JSX</span>
    </div>
  )
}
