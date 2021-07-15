import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Grid, Card } from '@material-ui/core'

import SalariesBarGraph, {
  Props
} from '../components/graphs/bar/SalariesBarGraph'

export default {
  title: 'Other/SalariesBarGraph',
  component: SalariesBarGraph
} as ComponentMeta<typeof SalariesBarGraph>

const Template: ComponentStory<typeof SalariesBarGraph> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <SalariesBarGraph {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = [
  {
    job_title: 'Analista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 4872.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 3499.0,
    expected_count: 8,
    current_count: 8
  },
  {
    job_title: 'Especialista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 14333.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 12832.333333333334,
    expected_count: 3,
    current_count: 3
  },
  {
    job_title: 'Consultor',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 10999.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10499.0,
    expected_count: 2,
    current_count: 2
  },
  {
    job_title: 'Coordenador',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 12100.25,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10749.0,
    expected_count: 4,
    current_count: 4
  },
  {
    job_title: 'Gerente',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 6499.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 6499.0,
    expected_count: 1,
    current_count: 1
  }
]

export const WithoutLine: Story<Props> = Template.bind({})
WithoutLine.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Salário Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  maxValue: 16_000,
  samplingLabel: 'Amostragem'
}

export const WithLine: Story<Props> = Template.bind({})
WithLine.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Salário Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  maxValue: 16_000,
  samplingLabel: 'Amostragem',
  line: {
    minValue: 12_000,
    maxValue: 4_000,
    sameValueLabel: 'Target',
    maxValueLabel: 'Fim da faixa',
    minValueLabel: 'Início da faixa'
  }
}

export const WithoutMultipleKeys: Story<Props> = Template.bind({})
WithoutMultipleKeys.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: ['Salário Fixo Atual (cor mais forte = maior amostragem)'],
  maxValue: 16_000,
  samplingLabel: 'Amostragem'
}
