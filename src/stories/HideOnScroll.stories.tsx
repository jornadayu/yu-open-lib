import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { AppBar, Card, CardContent } from '@material-ui/core'

import HideOnScroll, { Props } from '../components/HideOnScroll'

export default {
  title: 'Components/HideOnScroll',
  component: HideOnScroll
} as ComponentMeta<typeof HideOnScroll>

const Template: ComponentStory<typeof HideOnScroll> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent style={{ height: 600 }}>
        Scroll down
        <HideOnScroll {...args} />
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  children: (
    <AppBar>
      I disappear when scrolling down, and appear back scrolling up
    </AppBar>
  )
}
