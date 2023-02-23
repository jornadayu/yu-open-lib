import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import NivoTextTooltip from '../../components/graphs/NivoTextTooltip'

export default {
  title: 'Graphs/NivoTextTooltip',
  component: NivoTextTooltip
} as Meta<typeof NivoTextTooltip>

const Template: StoryFn<typeof NivoTextTooltip> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <NivoTextTooltip {...args} />
    </Card>
  </Grid>
)

export const StringValue = Template.bind({})
StringValue.args = {
  text: 'Some value',
  value: '55.45',
  color: '#fff'
}

export const PercentageValue = Template.bind({})
PercentageValue.args = {
  text: 'Some percentage value',
  value: 0.55,
  color: '#fff',
  isPercentage: true
}
