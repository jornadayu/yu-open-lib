import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import RichTextViewer from '../../components/RichTextViewer'

export default {
  title: 'Utils/RichTextViewer',
  component: RichTextViewer,
  parameters: {
    badges: ['Added: v2.3.0']
  }
} as Meta<typeof RichTextViewer>

const Template: StoryFn<typeof RichTextViewer> = (args) => {
  return (
    <div>
      Rich text viewer
      <RichTextViewer {...args} />
    </div>
  )
}

export const Example = Template.bind({})
Example.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>'
}

export const WithoutYuMode = Template.bind({})
WithoutYuMode.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  yuMode: false
}

export const WithMaxHeight = Template.bind({})
WithMaxHeight.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  maxHeight: 50
}

export const WithCustomStyle = Template.bind({})
WithCustomStyle.args = {
  html: '<h1>Title</h1><p>Some text</p><ol><li>item</li><li>item</li>',
  customStyle: {
    backgroundColor: 'pink'
  }
}
