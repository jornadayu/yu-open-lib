import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import YuAppBar from '../../components/NavBar/YuAppBar'
import LoadingLine, { Props } from '../../components/loaders/LoadingLine'

export default {
  title: 'Loaders/LoadingLine',
  component: LoadingLine,
  parameters: {
    badges: ['Added: 2.0.0']
  }
} as ComponentMeta<typeof LoadingLine>

const Template: ComponentStory<typeof LoadingLine> = (args) => {
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
