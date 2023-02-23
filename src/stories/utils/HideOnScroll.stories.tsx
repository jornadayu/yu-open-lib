import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { AppBar, Card, CardContent } from '@mui/material'

import HideOnScroll from '../../components/HideOnScroll'

export default {
  title: 'Utils/HideOnScroll',
  component: HideOnScroll
} as Meta<typeof HideOnScroll>

const Template: StoryFn<typeof HideOnScroll> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent style={{ height: 600 }}>
        Scroll down
        <HideOnScroll {...args} />
      </CardContent>
    </Card>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: (
    <AppBar>
      I disappear when scrolling down, and appear back scrolling up
    </AppBar>
  )
}
