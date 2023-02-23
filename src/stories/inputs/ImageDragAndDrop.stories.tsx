import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import ImageDragAndDrop, {
  Props
} from '../../components/inputs/ImageDragAndDrop'

export default {
  title: 'inputs/ImageDragAndDrop',
  component: ImageDragAndDrop,
  parameters: {
    badges: ['Added: v2.2.0']
  }
} as Meta<typeof ImageDragAndDrop>

const Template: StoryFn<typeof ImageDragAndDrop> = (args) => {
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

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}

export const OnAttach = Template.bind({})
OnAttach.args = {
  ...baseProps,
  onAttach(file) {
    alert('attached image' + JSON.stringify(file))
  }
}

export const CustomTitle = Template.bind({})
CustomTitle.args = {
  ...baseProps,
  title: 'titulo personalizado'
}

export const CustomStyling = Template.bind({})
CustomStyling.args = {
  ...baseProps,
  imageSrc: 'https://via.placeholder.com/500',
  height: 500,
  width: 500
}
