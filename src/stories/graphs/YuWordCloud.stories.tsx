import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import YuWordCloud, { Props } from '../../components/graphs/YuWordCloud'

export default {
  title: 'Graphs/YuWordCloud',
  component: YuWordCloud
} as Meta<typeof YuWordCloud>

const Template: StoryFn<typeof YuWordCloud> = (args) => (
  <Grid container>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <YuWordCloud {...args} />
    </Card>
  </Grid>
)

const words: Props['words'] = [
  { text: 'Stuff', value: 41 },
  { text: 'Other', value: 46 },
  { text: 'Computer', value: 65 },
  { text: 'Headset', value: 91 },
  { text: 'Video', value: 7 },
  { text: 'Monitor', value: 93 },
  { text: 'People', value: 79 },
  { text: 'Shirt', value: 86 },
  { text: 'Umbrella', value: 54 },
  { text: 'Another', value: 23 },
  { text: 'Day', value: 44 },
  { text: 'Thing', value: 68 },
  { text: 'Car', value: 36 },
  { text: 'House', value: 62 },
  { text: 'Person', value: 14 },
  { text: 'Light', value: 14 }
]

const valueSum = words.reduce((a, b) => a + (b.value || 0), 0)

const wordsPercentage = words.map((word) => ({
  ...word,
  value: word.value / valueSum
}))

export const StaticValues = Template.bind({})
StaticValues.args = {
  words
}

export const Percentage = Template.bind({})
Percentage.args = {
  words: wordsPercentage,
  isPercentage: true,
  precision: 2
}
