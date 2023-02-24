import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import YuAppBar from '../../components/NavBar/YuAppBar'
import LoadingLine from '../../components/loaders/LoadingLine'

export default {
  title: 'Loaders/LoadingLine',
  component: LoadingLine,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as Meta<typeof LoadingLine>

const Template: StoryFn<typeof LoadingLine> = (args) => {
  return (
    <React.Fragment>
      <YuAppBar
        items={{
          drawerItems: [],
          leftItems: [],
          rightItems: []
        }}
      />

      <LoadingLine active {...args} />
    </React.Fragment>
  )
}

export const Top = Template.bind({})
Top.args = {
  topY: 86,
  bottom: false
}

export const BottomOnMobile = Template.bind({})
BottomOnMobile.args = {
  topY: 86,
  bottom: true
}
