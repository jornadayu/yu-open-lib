import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import YuWordCloud, { Props } from '../../components/graphs/YuWordCloud'

export default {
  title: 'Graphs/YuWordCloud',
  component: YuWordCloud
} as ComponentMeta<typeof YuWordCloud>

const Template: ComponentStory<typeof YuWordCloud> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <YuWordCloud {...args} />
    </Card>
  </Grid>
)

const randomValue = () => Math.floor(Math.random() * (100 - 5) + 5)

const words: Props['words'] = [
  { text: 'Stuff', value: randomValue() },
  { text: 'Other', value: randomValue() },
  { text: 'Computer', value: randomValue() },
  { text: 'Headset', value: randomValue() },
  { text: 'Video', value: randomValue() },
  { text: 'Monitor', value: randomValue() },
  { text: 'People', value: randomValue() },
  { text: 'Shirt', value: randomValue() },
  { text: 'Umbrella', value: randomValue() },
  { text: 'Another', value: randomValue() },
  { text: 'Day', value: randomValue() },
  { text: 'Thing', value: randomValue() },
  { text: 'Car', value: randomValue() },
  { text: 'House', value: randomValue() },
  { text: 'Person', value: randomValue() },
  { text: 'Light', value: randomValue() }
]

const valueSum = words.reduce((a, b) => a + (b.value || 0), 0)

const wordsPercentage = words.map((word) => ({
  ...word,
  value: word.value / valueSum
}))

export const StaticValues: Story<Props> = Template.bind({})
StaticValues.args = {
  words
}

export const Percentage: Story<Props> = Template.bind({})
Percentage.args = {
  words: wordsPercentage,
  isPercentage: true,
  precision: 2
}
