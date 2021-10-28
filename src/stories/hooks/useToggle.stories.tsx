import React from 'react'

import { Story } from '@storybook/react'
import { Card, CardContent, Button } from '@mui/material'

import { useToggle } from '../../hooks'

export default {
  title: 'Hooks/useToggle'
}

const Template = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <Card variant='outlined'>
      <CardContent>
        Value is: {value.toString()}
        <br />
        <Button variant='contained' onClick={toggleValue}>
          Toggle
        </Button>
      </CardContent>
    </Card>
  )
}

export const Example: Story = Template.bind({})
