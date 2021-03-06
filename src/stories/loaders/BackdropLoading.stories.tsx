import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import BackdropLoading, {
  Props
} from '../../components/loaders/BackdropLoading'

export default {
  title: 'Loaders/BackdropLoading',
  component: BackdropLoading
} as ComponentMeta<typeof BackdropLoading>

const Template: ComponentStory<typeof BackdropLoading> = () => {
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

export const Example: Story<Props> = Template.bind({})
Example.args = {}
