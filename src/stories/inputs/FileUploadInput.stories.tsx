import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Check } from '@mui/icons-material'
import { Card, CardContent } from '@mui/material'

import FileUploadInput, { Props } from '../../components/inputs/FileUploadInput'

export default {
  title: 'Inputs/FileUploadInput',
  component: FileUploadInput,
  parameters: {
    badges: ['v2.1.2']
  }
} as ComponentMeta<typeof FileUploadInput>

const Template: ComponentStory<typeof FileUploadInput> = (args) => {
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

export const Example: Story<Props> = Template.bind({})
Example.args = {
  ...baseProps
}

export const CustomButton: Story<Props> = Template.bind({})
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

export const DefaultFile: Story<Props> = Template.bind({})
DefaultFile.args = {
  ...baseProps,
  defaultValue: new File(['Hello World'], 'hello.txt')
}

export const CustomSave: Story<Props> = Template.bind({})
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

export const Loading: Story<Props> = Template.bind({})
Loading.args = {
  ...baseProps,
  label: 'File',
  loading: true
}
