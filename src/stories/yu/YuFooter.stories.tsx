import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Grid } from '@mui/material'

import YuAppBar from '../../components/NavBar/YuAppBar'
import { YuFooter } from '../../index'

export default {
  title: 'YU/YuFooter',
  component: YuFooter,
  parameters: {
    badges: ['Added: v2.1.4']
  }
} as Meta<typeof YuFooter>

const Template: StoryFn<typeof YuFooter> = (args) => {
  return (
    <Grid container>
      <YuAppBar
        logo='yu'
        homeURL='/'
        items={{
          drawerItems: [],
          leftItems: [],
          rightItems: []
        }}
      />

      <div style={{ height: 300, marginTop: 80 }}>...</div>

      <YuFooter {...args} />
    </Grid>
  )
}

export const Example = Template.bind({})
Example.args = {}

export const CustomImage = Template.bind({})
CustomImage.args = {
  imageSrc: 'https://via.placeholder.com/150'
}
