import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import ConfirmDialog, { Props } from '../components/ConfirmDialog'

export default {
  title: 'Components/ConfirmDialog',
  component: ConfirmDialog,
  argTypes: {
    handleConfirm: { action: 'handleConfirm' },
    handleClose: { action: 'handleClose' }
  }
} as ComponentMeta<typeof ConfirmDialog>

const Template: ComponentStory<typeof ConfirmDialog> = (args) => (
  <ConfirmDialog {...args} />
)

const baseProps: Partial<Props> = {
  title: 'Dialog Title',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  text: 'Do you want to confirm?',
  open: true
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
