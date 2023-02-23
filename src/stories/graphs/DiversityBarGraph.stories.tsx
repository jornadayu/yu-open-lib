import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import DiversityBarGraph, {
  Datum,
  DatumWithTotal
} from '../../components/graphs/bar/DiversityBarGraph'

export default {
  title: 'Graphs/DiversityBarGraph',
  component: DiversityBarGraph
} as Meta<typeof DiversityBarGraph>

const Template: StoryFn<typeof DiversityBarGraph> = (args) => (
  <Grid container style={{ height: 500, width: 1070 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <DiversityBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Datum[] = [
  {
    question: 'PCD',
    'Prefiro não responder a esta pergunta.': 10,
    total: 157,
    'Deficiência visual': 1,
    Não: 146
  },
  {
    question: 'Cor da pele',
    Pardo: 16,
    total: 157,
    'Prefiro não responder a esta pergunta.': 11,
    Branco: 114,
    Preto: 11,
    Amarelo: 2
  },
  {
    question: 'Identidade de Gênero',
    'Prefiro não responder a esta pergunta.': 14,
    total: 157,
    Cisgênero: 125
  },
  {
    question: 'Gênero',
    Feminino: 37,
    total: 157,
    'Prefiro não responder a esta pergunta.': 10,
    Masculino: 92
  },
  {
    question: 'Orientação Sexual',
    'Prefiro não responder a esta pergunta.': 12,
    total: 157,
    Outro: 2,
    Heterossexual: 141,
    Bissexual: 4,
    Homossexual: 7
  }
]

const toPercentageValues = (datum: Datum): DatumWithTotal => {
  const copy = { ...datum }

  for (const key of Object.keys(datum)) {
    if (key === 'total' || typeof datum[key] === 'string') continue

    copy[key] = (datum[key] as number) / (datum.total as number)
  }

  return { ...copy, total: 1 }
}

const percentageData = data.map(toPercentageValues)

export const Horizontal = Template.bind({})
Horizontal.args = {
  data
}

export const Vertical = Template.bind({})
Vertical.args = {
  data,
  verticalGraph: true
}

export const HorizontalPercentage = Template.bind({})
HorizontalPercentage.args = {
  data: percentageData,
  isPercentage: true
}

export const VerticalPercentage = Template.bind({})
VerticalPercentage.args = {
  data: percentageData,
  isPercentage: true,
  verticalGraph: true
}
