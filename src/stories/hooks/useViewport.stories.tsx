import React from 'react'

import { Story } from '@storybook/react'

import { Card, CardContent } from '@mui/material'

import { useViewport } from '../../hooks'

export default {
  title: 'Hooks/useViewport'
}

const Template = () => {
  const { isMobile } = useViewport()

  return (
    <Card variant='outlined'>
      <CardContent>
        <p>isMobile: {isMobile.toString()}</p>
      </CardContent>
    </Card>
  )
}

export const Example: Story = Template.bind({})
