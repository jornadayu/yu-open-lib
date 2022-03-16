import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { BADGES } from '../../../.storybook/constants'
import PersonAvatar, { Props } from '../../components/person/PersonAvatar'

export default {
  title: 'person/PersonAvatar',
  component: PersonAvatar,
  parameters: {
    badges: [BADGES.UNRELEASED]
  }
} as ComponentMeta<typeof PersonAvatar>

const Template: ComponentStory<typeof PersonAvatar> = (args) => {
  return (
    <div style={{ width: 280 }}>
      <PersonAvatar {...args} />
    </div>
  )
}

const baseProps: Partial<Props> = {
  avatarSrc: 'https://via.placeholder.com/150'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}
