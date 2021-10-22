import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Grid, Card } from '@mui/material'

import YuBarGraph, { Props } from '../components/graphs/bar/YuBarGraph'

export default {
  title: 'Graphs/YuBarGraph',
  component: YuBarGraph
} as ComponentMeta<typeof YuBarGraph>

const Template: ComponentStory<typeof YuBarGraph> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <YuBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = [
  { Placed: 4, name: 'Etapa Final' },
  { Out: 2, 'Stand By': 3, name: 'Etapa 8' },
  { Out: 4, name: 'Etapa 7' },
  { name: 'Etapa 6' },
  { Out: 7, name: 'Etapa 5' },
  { 'Em Processo': 7, Out: 13, name: 'Etapa 4' },
  { Out: 8, 'Stand By': 18, name: 'Etapa 3' },
  { Out: 3, name: 'Etapa 2' },
  { Out: 89, name: 'Etapa 1' }
]

export const Candidates: Story<Props> = Template.bind({})
Candidates.args = {
  data,
  keys: ['Out', 'Placed', 'Em processo', 'Stand By'],
  colors: ['#e66c36', '#3b9230', '#238dff', '#999999']
}
