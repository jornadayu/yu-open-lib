import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import LoadingLine, { Props } from '../../components/loaders/LoadingLine'
import YuAppBar from '../../components/NavBar/YuAppBar'

export default {
  title: 'Loaders/LoadingLine',
  component: LoadingLine,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof LoadingLine>

const Template: ComponentStory<typeof LoadingLine> = (args) => {
  return (
    <>
      <YuAppBar
        items={{
          drawerItems: [],
          leftItems: [],
          rightItems: []
        }}
      />

      <LoadingLine active {...args} />
    </>
  )
}

export const Top: Story<Props> = Template.bind({})
Top.args = {
  topY: 86,
  bottom: false
}

export const BottomOnMobile: Story<Props> = Template.bind({})
BottomOnMobile.args = {
  topY: 86,
  bottom: true
}
