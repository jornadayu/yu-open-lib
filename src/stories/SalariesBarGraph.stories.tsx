import React from 'react'

import { BADGE } from '@geometricpanda/storybook-addon-badges'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Grid, Card } from '@mui/material'

import SalariesBarGraph, {
  Props
} from '../components/graphs/bar/SalariesBarGraph'

export default {
  title: 'Graphs/SalariesBarGraph',
  component: SalariesBarGraph,
  parameters: {
    badges: [BADGE.NEEDS_REVISION]
  }
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
    count: 8
  },
  {
    job_title: 'Especialista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 14333.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 12832.333333333334,
    count: 3
  },
  {
    job_title: 'Consultor',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 10999.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10499.0,
    count: 2
  },
  {
    job_title: 'Coordenador',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 12100.25,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10749.0,
    count: 4
  },
  {
    job_title: 'Gerente',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 6499.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 6499.0,
    count: 1
  }
]

const dataWithoutCount: Props['data'] = [
  {
    job_title: 'Analista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 4872.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 3499.0
  },
  {
    job_title: 'Especialista',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 14333.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 12832.333333333334
  },
  {
    job_title: 'Consultor',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 10999.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10499.0
  },
  {
    job_title: 'Coordenador',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 12100.25,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 10749.0
  },
  {
    job_title: 'Gerente',
    'Expectativa Salarial (cor mais forte = maior amostragem)': 6499.0,
    'Salário Fixo Atual (cor mais forte = maior amostragem)': 6499.0
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
    minValue: 6_000,
    maxValue: 8_000,
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
  samplingLabel: 'Amostragem'
}

export const WithoutSampleSize: Story<Props> = Template.bind({})
WithoutSampleSize.args = {
  data: dataWithoutCount,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: ['Salário Fixo Atual (cor mais forte = maior amostragem)'],
  hasSampling: false
}

export const ComputedMaxValue: Story<Props> = Template.bind({})
ComputedMaxValue.args = {
  data,
  legend: 'Salary Data',
  indexBy: 'job_title',
  keys: [
    'Salário Fixo Atual (cor mais forte = maior amostragem)',
    'Expectativa Salarial (cor mais forte = maior amostragem)'
  ],
  samplingLabel: 'Amostragem',
  line: {
    minValue: 4_000,
    maxValue: 8_000,
    sameValueLabel: '',
    maxValueLabel: '',
    minValueLabel: ''
  }
}
