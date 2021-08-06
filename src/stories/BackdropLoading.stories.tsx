import React, { useState } from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Card, Button, CardContent } from '@material-ui/core'

import BackdropLoading, { Props } from '../components/BackdropLoading'

export default {
  title: 'Other/BackdropLoading',
  component: BackdropLoading
} as ComponentMeta<typeof BackdropLoading>

const Template: ComponentStory<typeof BackdropLoading> = () => {
  const [loading, setLoading] = useState(false)

  return (
    <Card variant='outlined'>
      <CardContent>
        <Button
          variant='outlined'
          onClick={() => {
            setLoading(true)
            setTimeout(() => setLoading(false), 2000)
          }}
        >
          Set Loading
        </Button>
      </CardContent>

      <BackdropLoading open={loading} />
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
