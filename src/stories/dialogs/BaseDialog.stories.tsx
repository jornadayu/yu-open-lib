import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Button } from '@mui/material'

import BaseDialog, {
  BaseDialogProps
} from '../../components/dialogs/BaseDialog'

export default {
  title: 'Dialogs/BaseDialog',
  component: BaseDialog,
  argTypes: {
    handleConfirm: { action: 'handleConfirm' },
    handleClose: { action: 'handleClose' }
  },
  parameters: {
    badges: ['Added: 2.0.1'] // Component was added in version 1.7.9
  }
} as ComponentMeta<typeof BaseDialog>

const Template: ComponentStory<typeof BaseDialog> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.handleClose()
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <BaseDialog {...args} open={open} onClose={close}>
        Some Content here
      </BaseDialog>
    </>
  )
}

const baseProps: BaseDialogProps = {
  title: 'Dialog Title',
  actions: () => (
    <>
      <Button>Yes</Button>
      <Button>No</Button>
    </>
  )
}

export const Example: Story<BaseDialogProps> = Template.bind({})
Example.args = {
  ...baseProps
}

export const LoadingDialog: Story<BaseDialogProps> = Template.bind({})
LoadingDialog.args = {
  ...baseProps,
  loading: true
}

type PropsWithChildren = BaseDialogProps & { children?: React.ReactNode }

export const CustomChildren: Story<PropsWithChildren> = Template.bind({})
CustomChildren.args = {
  ...baseProps,
  children: (
    <div>
      custom <strong>dialog</strong> <em>content</em> with{' '}
      <span style={{ color: 'red' }}>JSX</span>
    </div>
  )
}
