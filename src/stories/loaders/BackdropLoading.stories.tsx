import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import BackdropLoading from '../../components/loaders/BackdropLoading'

export default {
  title: 'Loaders/BackdropLoading',
  component: BackdropLoading
} as Meta<typeof BackdropLoading>

const Template: StoryFn<typeof BackdropLoading> = () => {
  const [loading, setLoading] = useState(false)

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 2000)
        }}
      >
        Set Loading
      </button>

      <BackdropLoading open={loading} />
    </React.Fragment>
  )
}

export const Example = Template.bind({})
Example.args = {}
