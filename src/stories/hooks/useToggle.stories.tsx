import React from 'react'

import { StoryFn } from '@storybook/react'

import { Box, Button } from '@mui/material'

import { useToggle } from '../../hooks'

export default {
  title: 'Hooks/useToggle',
  argTypes: {
    onClose: { action: 'onClose' }
  },
  parameters: {
    badges: ['Added: v2.3.2']
  }
}

const Template: StoryFn = () => {
  const [value, toggleValue] = useToggle(false)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      Value is: {value.toString()}
      <Button
        onClick={toggleValue}
        variant='outlined'
        sx={{
          width: '150px',
          marginTop: '10px'
        }}
      >
        Toggle
      </Button>
    </Box>
  )
}

export const Example = Template.bind({})
