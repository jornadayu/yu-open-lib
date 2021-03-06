import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { AppBar, Card, CardContent } from '@mui/material'

import HideOnScroll, { Props } from '../../components/HideOnScroll'

export default {
  title: 'Utils/HideOnScroll',
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
