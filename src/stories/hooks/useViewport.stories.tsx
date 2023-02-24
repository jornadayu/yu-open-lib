import React from 'react'

import { StoryFn } from '@storybook/react'

import { Box } from '@mui/material'

import { useViewport } from '../../hooks'

export default {
  title: 'Hooks/useViewport',
  argTypes: {
    onClose: { action: 'onClose' }
  },
  parameters: {
    badges: ['Added: v2.3.2']
  }
}

const Template: StoryFn = () => {
  const { isMobile } = useViewport()

  return (
    <Box>
      isMobile: {isMobile.toString()}
      {isMobile && <div>I only appear on mobile viewports</div>}
    </Box>
  )
}

export const Example = Template.bind({})
