import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import CookiesWarning, { Props } from '../../components/cookies/CookiesWarning'

export default {
  title: 'cookies/CookiesWarning',
  component: CookiesWarning
} as Meta<typeof CookiesWarning>

const Template: StoryFn<typeof CookiesWarning> = (args) => {
  return <CookiesWarning {...args} />
}

const baseProps: Partial<Props> = {
  url: 'https://www.google.com',
  locale: 'pt'
}

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}
