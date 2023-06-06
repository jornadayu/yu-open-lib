import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Button } from '@mui/material'

import BaseDialog, {
  BaseDialogProps
} from '../../components/dialogs/BaseDialog'

export default {
  title: 'Dialogs/BaseDialog',
  component: BaseDialog,
  argTypes: {
    onClose: { action: 'onClose' }
  },
  parameters: {
    badges: ['Added: v2.3.2']
  }
} as Meta<typeof BaseDialog>

const Template: StoryFn<typeof BaseDialog> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.onClose && args.onClose()
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <BaseDialog {...args} open={open} onClose={close}>
        Some Content here
      </BaseDialog>
    </React.Fragment>
  )
}

const baseProps: BaseDialogProps = {
  open: false,
  title: 'Dialog Title',
  actions: (
    <React.Fragment>
      <Button>Yes</Button>
      <Button>No</Button>
    </React.Fragment>
  )
}

export const Example = Template.bind({})
Example.args = {
  ...baseProps
}

export const LoadingDialog = Template.bind({})
LoadingDialog.args = {
  ...baseProps,
  loading: true
}

export const CustomChildren = Template.bind({})
CustomChildren.args = {
  ...baseProps,
  children: (
    <div>
      custom <strong>dialog</strong> <em>content</em> with{' '}
      <span style={{ color: 'red' }}>JSX</span>
    </div>
  )
}
