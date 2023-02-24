import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import ClickableArea from '../../components/ClickableArea'

export default {
  title: 'Utils/ClickableArea',
  component: ClickableArea,
  argTypes: { onClick: { action: 'clicked' } }
} as Meta<typeof ClickableArea>

const Template: StoryFn<typeof ClickableArea> = (args) => (
  <ClickableArea {...args}>
    <div style={{ backgroundColor: 'red' }}>Click anywhere in the red area</div>
  </ClickableArea>
)

export const Example = Template.bind({})
Example.args = {}
