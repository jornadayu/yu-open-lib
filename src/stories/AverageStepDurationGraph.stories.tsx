import React from 'react'

import { Grid, Card } from '@material-ui/core'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'

import AverageStepDurationGraph, {
  AverageStepDurationGraphProps
} from '../components/graphs/AverageStepDurationGraph'
import { BADGES } from '../../.storybook/constants'

export default {
  title: 'Graphs/AverageStepDurationGraph',
  component: AverageStepDurationGraph,
  parameters: {
    badges: [BADGES.UNRELEASED]
  }
} as ComponentMeta<typeof AverageStepDurationGraph>

const Template: ComponentStory<typeof AverageStepDurationGraph> = (args) => (
  <Grid container>
    <Card style={{ height: 800, width: '100%', padding: 24 }}>
      <AverageStepDurationGraph {...args} />
    </Card>
  </Grid>
)

export const Example: Story<AverageStepDurationGraphProps> = Template.bind({})
Example.args = {
  steps: [
    { name: 'First Step', count: 4 },
    { name: 'Second Step', count: 4.5 },
    { name: 'Third Step', count: 5 },
    { name: 'Fourth Step', count: 13.4 },
    { name: 'Fifth Step', count: 9 }
  ]
}
