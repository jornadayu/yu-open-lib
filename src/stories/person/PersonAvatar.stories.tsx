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
  avatarSrc: 'https://via.placeholder.com/150',
  fileKey: 'avatar',
  onAttach(data) {
    console.log('attached image' + JSON.stringify(data.get('avatar')))
  }
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const OnAttach: Story<Props> = Template.bind({})
OnAttach.args = {
  ...baseProps,
  fileKey: 'avatar',
  onAttach(data) {
    alert('attached image' + JSON.stringify(data.get('avatar')))
  }
}

export const CustomTooltip: Story<Props> = Template.bind({})
CustomTooltip.args = {
  ...baseProps,
  tooltip: 'Drag to upload'
}

export const CustomStyling: Story<Props> = Template.bind({})
CustomStyling.args = {
  ...baseProps,
  avatarSrc: 'https://via.placeholder.com/500',
  style: {
    width: '500px',
    height: '500px'
  },
  imageProps: {
    style: {
      width: '500px',
      height: '500px'
    }
  }
}
