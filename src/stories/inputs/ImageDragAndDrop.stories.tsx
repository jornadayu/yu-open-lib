import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { BADGES } from '../../../.storybook/constants'
import ImageDragAndDrop, {
  Props
} from '../../components/inputs/ImageDragAndDrop'

export default {
  title: 'inputs/ImageDragAndDrop',
  component: ImageDragAndDrop,
  parameters: {
    badges: [BADGES.UNRELEASED]
  }
} as ComponentMeta<typeof ImageDragAndDrop>

const Template: ComponentStory<typeof ImageDragAndDrop> = (args) => {
  return (
    <div style={{ width: 500 }}>
      <ImageDragAndDrop {...args} />
    </div>
  )
}

const baseProps: Partial<Props> = {
  imageSrc: 'https://via.placeholder.com/300',
  onAttach(file) {
    console.log('attached image' + JSON.stringify(file))
  }
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}

export const OnAttach: Story<Props> = Template.bind({})
OnAttach.args = {
  ...baseProps,
  onAttach(file) {
    alert('attached image' + JSON.stringify(file))
  }
}

export const CustomTitle: Story<Props> = Template.bind({})
CustomTitle.args = {
  ...baseProps,
  title: 'titulo personalizado'
}

export const CustomStyling: Story<Props> = Template.bind({})
CustomStyling.args = {
  ...baseProps,
  imageSrc: 'https://via.placeholder.com/500',
  height: 500,
  width: 500
}
