import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import RichTextViewer, { Props } from '../../components/RichTextViewer'

export default {
  title: 'Utils/RichTextViewer',
  component: RichTextViewer,
  parameters: {
    badges: ['Added: v2.3.0']
  }
} as ComponentMeta<typeof RichTextViewer>

const Template: ComponentStory<typeof RichTextViewer> = (args) => {
  return (
    <div>
      Rich text viewer
      <RichTextViewer {...args} />
    </div>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>'
}

export const WithoutYuMode: Story<Props> = Template.bind({})
WithoutYuMode.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  yuMode: false
}

export const WithMaxHeight: Story<Props> = Template.bind({})
WithMaxHeight.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  maxHeight: 50
}

export const WithCustomStyle: Story<Props> = Template.bind({})
WithCustomStyle.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  customStyle: {
    backgroundColor: 'pink'
  }
}
