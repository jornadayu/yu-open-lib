import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Grid } from '@mui/material'

import YuAppBar from '../../components/NavBar/YuAppBar'
import { Props } from '../../components/yu/YuFooter'
import { YuFooter } from '../../index'

export default {
  title: 'YU/YuFooter',
  component: YuFooter,
  parameters: {
    badges: ['v2.1.4']
  }
} as ComponentMeta<typeof YuFooter>

const Template: ComponentStory<typeof YuFooter> = (args) => {
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

export const Example: Story<Props> = Template.bind({})
Example.args = {}

export const CustomImage: Story<Props> = Template.bind({})
CustomImage.args = {
  imageSrc: 'https://via.placeholder.com/150'
}
