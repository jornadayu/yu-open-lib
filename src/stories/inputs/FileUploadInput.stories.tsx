import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Check } from '@mui/icons-material'
import { Card, CardContent } from '@mui/material'

import FileUploadInput, { Props } from '../../components/inputs/FileUploadInput'

export default {
  title: 'Inputs/FileUploadInput',
  component: FileUploadInput,
  parameters: {
    badges: ['Added: v2.1.2']
  }
} as Meta<typeof FileUploadInput>

const Template: StoryFn<typeof FileUploadInput> = (args) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <FileUploadInput {...args} />
      </CardContent>
    </Card>
  )
}

const baseProps: Partial<Props> = {
  label: 'Upload',
  field: 'file',
  async onSubmit(file) {
    const text = await file.text()

    alert(`${file.name}: ${text.slice(0, 100)}`)
  }
}

export const Example = Template.bind({})
Example.args = {
  ...baseProps
}

export const CustomButton = Template.bind({})
CustomButton.args = {
  ...baseProps,
  label: 'File',
  buttonProps: {
    color: 'success',
    variant: 'contained',
    sx: {
      fontWeight: 'bold',
      textTransform: 'none'
    }
  }
}

export const DefaultFile = Template.bind({})
DefaultFile.args = {
  ...baseProps,
  defaultValue: new File(['Hello World'], 'hello.txt')
}

export const CustomSave = Template.bind({})
CustomSave.args = {
  ...baseProps,
  label: 'File',
  defaultValue: new File(['Hello World'], 'hello.txt'),
  saveIcon: <Check />,
  saveButtonProps: {
    color: 'success',
    sx: {
      fontWeight: 'bold',
      textTransform: 'none',
      ml: 2
    }
  }
}

export const Loading = Template.bind({})
Loading.args = {
  ...baseProps,
  label: 'File',
  loading: true
}
