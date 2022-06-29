import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Cancel } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Button, IconButton } from '@mui/material'

import ConfirmDialog, { Props } from '../../components/ConfirmDialog'

export default {
  title: 'Dialogs/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    handleConfirm: { action: 'handleConfirm' },
    handleClose: { action: 'handleClose' }
  }
} as ComponentMeta<typeof ConfirmDialog>

const Template: ComponentStory<typeof ConfirmDialog> = (args) => {
  const [open, setOpen] = useState(false)

  const close = () => {
    args.handleClose()
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>Open Dialog</button>

      <ConfirmDialog {...args} open={open} handleClose={close} />
    </React.Fragment>
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

type PropsWithChildren = Props & { children?: React.ReactNode }

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

export const CustomButtons: Story<PropsWithChildren> = Template.bind({})
CustomButtons.args = {
  ...baseProps,
  renderCancelButton(buttonProps) {
    return (
      <IconButton {...buttonProps} color='error'>
        <Cancel />
      </IconButton>
    )
  }
}

export const CustomActions: Story<PropsWithChildren> = Template.bind({})
CustomActions.args = {
  ...baseProps,
  renderActions({ handleClose, handleConfirm, loading }) {
    return (
      <div>
        <Button variant='outlined' onClick={handleClose} color='error'>
          Cancel
        </Button>

        <Button
          variant='outlined'
          onClick={handleConfirm}
          color='success'
          sx={{ ml: 1 }}
        >
          Confirm
        </Button>

        <LoadingButton
          variant='outlined'
          loading={loading}
          onClick={() => {
            alert('extra action!')
          }}
          sx={{ ml: 1 }}
        >
          New Extra action
        </LoadingButton>
      </div>
    )
  }
}
