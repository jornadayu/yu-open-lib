import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card } from '@mui/material'

import type { Props } from '../../components/graphs/EChartsFunnelGraph'
import { EChartsFunnelGraph } from '../../index'

export default {
  title: 'Graphs/EChartsFunnelGraph',
  component: EChartsFunnelGraph
} as ComponentMeta<typeof EChartsFunnelGraph>

const Template: ComponentStory<typeof EChartsFunnelGraph> = (args) => (
  <Card variant='outlined' sx={{ p: 2 }}>
    <EChartsFunnelGraph {...args} />
  </Card>
)

const exampleData = [
  {
    id: 'step_1',
    label: 'Etapa 1',
    value: 2789
  },
  {
    id: 'step_2',
    label: 'Etapa 2',
    value: 569
  },
  {
    id: 'step_3',
    label: 'Etapa 3',
    value: 134
  },
  {
    id: 'step_4',
    label: 'Etapa 4',
    value: 78
  },
  {
    id: 'step_5',
    label: 'Etapa 5',
    value: 42
  },
  {
    id: 'step_6',
    label: 'Etapa 6',
    value: 12
  }
]

export const Example: Story<Props> = Template.bind({})
Example.args = {
  data: exampleData,
  colors: Array(exampleData.length).fill('#a11e81')
}

export const CustomColors: Story<Props> = Template.bind({})
CustomColors.args = {
  data: exampleData,
  colors: [
    ...Array(exampleData.length / 2).fill('#265bbd'),
    ...Array(exampleData.length / 2).fill('#1ea124')
  ]
}

export const CustomOptions: Story<Props> = Template.bind({})
CustomOptions.args = {
  data: exampleData,
  colors: [
    ...Array(exampleData.length / 2).fill('#26bd60'),
    ...Array(exampleData.length / 2).fill('#c4ba2f')
  ],
  seriesOptions: {
    width: '40%'
  }
}

export const WithLegends: Story<Props> = Template.bind({})
WithLegends.args = {
  data: exampleData,
  colors: [
    ...Array(exampleData.length / 2).fill('#26bd60'),
    ...Array(exampleData.length / 2).fill('#c4ba2f')
  ],
  seriesOptions: {
    top: '40',
    height: '85%'
  },
  withLegends: true
}

export const CustomLegend: Story<Props> = Template.bind({})
CustomLegend.args = {
  data: exampleData,
  colors: Array(exampleData.length).fill('#269abd'),
  seriesOptions: {
    width: '40%'
  },
  legendOptions: {
    width: 100,
    top: 100
  },
  withLegends: true
}
