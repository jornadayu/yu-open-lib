import React, { useState } from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Dialog, DialogContent } from '@material-ui/core'

import DialogTitle, { Props } from '../components/DialogTitle'

export default {
  title: 'Components/DialogTitle',
  component: DialogTitle,
  argTypes: { onClose: { action: 'onClose' } }
} as ComponentMeta<typeof DialogTitle>

const Template: ComponentStory<typeof DialogTitle> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.onClose()
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <Dialog open={open} onClose={close} maxWidth='md' fullWidth>
        <DialogTitle {...args} onClose={close} />

        <DialogContent>Some Content</DialogContent>
      </Dialog>
    </>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  children: (
    <h4>
      Some Custom title <span style={{ color: 'red' }}>with JSX</span>
    </h4>
  )
}
