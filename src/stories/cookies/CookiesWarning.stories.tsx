import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import CookiesWarning, { Props } from '../../components/cookies/CookiesWarning'

export default {
  title: 'cookies/CookiesWarning',
  component: CookiesWarning
} as ComponentMeta<typeof CookiesWarning>

const Template: ComponentStory<typeof CookiesWarning> = (args) => {
  return <CookiesWarning {...args} />
}

const baseProps: Partial<Props> = {
  url: 'https://www.google.com',
  locale: 'pt'
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}
