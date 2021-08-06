import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card, CardContent } from '@material-ui/core'

import ClickableArea, { Props } from '../components/ClickableArea'

export default {
  title: 'Other/ClickableArea',
  component: ClickableArea
} as ComponentMeta<typeof ClickableArea>

const Template: ComponentStory<typeof ClickableArea> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <ClickableArea {...args}>
          <div style={{ backgroundColor: 'red' }}>
            Click anywhere in the red area
          </div>
        </ClickableArea>
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  onClick() {
    alert('clicked')
  }
}
