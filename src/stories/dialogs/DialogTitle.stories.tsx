import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Dialog, DialogContent } from '@mui/material'

import DialogTitle from '../../components/DialogTitle'

export default {
  title: 'Dialogs/DialogTitle',
  component: DialogTitle,
  argTypes: { onClose: { action: 'onClose' } },
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as Meta<typeof DialogTitle>

const Template: StoryFn<typeof DialogTitle> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.onClose()
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <Dialog open={open} onClose={close} maxWidth='md' fullWidth>
        <DialogTitle {...args} onClose={close} />

        <DialogContent>Some Content</DialogContent>
      </Dialog>
    </React.Fragment>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: (
    <h4>
      Some Custom title <span style={{ color: 'red' }}>with JSX</span>
    </h4>
  )
}
