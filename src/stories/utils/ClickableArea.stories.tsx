import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import ClickableArea, { Props } from '../../components/ClickableArea'

export default {
  title: 'Utils/ClickableArea',
  component: ClickableArea,
  argTypes: { onClick: { action: 'clicked' } }
} as ComponentMeta<typeof ClickableArea>

const Template: ComponentStory<typeof ClickableArea> = (args) => (
  <ClickableArea {...args}>
    <div style={{ backgroundColor: 'red' }}>Click anywhere in the red area</div>
  </ClickableArea>
)

export const Example: Story<Props> = Template.bind({})
Example.args = {}
