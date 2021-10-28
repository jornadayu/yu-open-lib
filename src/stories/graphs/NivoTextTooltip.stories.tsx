import React from 'react'

import { Grid, Card } from '@mui/material'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import NivoTextTooltip, { Props } from '../../components/graphs/NivoTextTooltip'

export default {
  title: 'Graphs/NivoTextTooltip',
  component: NivoTextTooltip
} as ComponentMeta<typeof NivoTextTooltip>

const Template: ComponentStory<typeof NivoTextTooltip> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <NivoTextTooltip {...args} />
    </Card>
  </Grid>
)

export const StringValue: Story<Props> = Template.bind({})
StringValue.args = {
  text: 'Some value',
  value: '55.45',
  color: '#fff'
}

export const PercentageValue: Story<Props> = Template.bind({})
PercentageValue.args = {
  text: 'Some percentage value',
  value: 0.55,
  color: '#fff',
  isPercentage: true
}
