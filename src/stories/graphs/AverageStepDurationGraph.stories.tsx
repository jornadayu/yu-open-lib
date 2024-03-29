import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, Grid } from '@mui/material'

import AverageStepDurationGraph from '../../components/graphs/AverageStepDurationGraph'

export default {
  title: 'Graphs/AverageStepDurationGraph',
  component: AverageStepDurationGraph,
  parameters: {
    badges: ['Added: 1.8.0']
  }
} as Meta<typeof AverageStepDurationGraph>

const Template: StoryFn<typeof AverageStepDurationGraph> = (args) => (
  <Grid container>
    <Card style={{ height: 500, width: '100%', padding: 24 }}>
      <AverageStepDurationGraph {...args} />
    </Card>
  </Grid>
)

export const Example = Template.bind({})
Example.args = {
  steps: [
    { name: 'First Step', count: 4 },
    { name: 'Second Step', count: 8.2 },
    { name: 'Third Step', count: 5 },
    { name: 'Fourth Step', count: 13.4 },
    { name: 'Fifth Step', count: 9 }
  ]
}

export const LongStepNames = Template.bind({})
LongStepNames.args = {
  steps: [
    { name: 'First Very Long Title Step', count: 4 },
    { name: 'Second Very Long Title Step', count: 8.2 },
    { name: 'Third Very Long Title Step', count: 5 },
    { name: 'Fourth Very Long Title Step', count: 13.4 },
    { name: 'Fifth Very Long Title Step', count: 9 }
  ]
}

export const SameNameSteps = Template.bind({})
SameNameSteps.args = {
  steps: [
    { name: 'Same Step Name', count: 4 },
    { name: 'Same Step Name', count: 8.2 },
    { name: 'Same Step Name', count: 5 },
    { name: 'Same Step Name', count: 13.4 },
    { name: 'Same Step Name', count: 9 },
    { name: 'Same Step Name', count: 4 },
    { name: 'Same Step Name', count: 9 },
    { name: 'Same Step Name', count: 14.2 },
    { name: 'Same Step Name', count: 9 }
  ]
}

export const LotsOfSteps = Template.bind({})
LotsOfSteps.args = {
  steps: [
    { name: 'First Very Long Title Step', count: 4 },
    { name: 'Second Very Long Title Step', count: 8.2 },
    { name: 'Third Very Long Title Step', count: 5 },
    { name: 'Fourth Very Long Title Step', count: 13.4 },
    { name: 'Fifth Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 },
    { name: 'Another Very Long Title Step', count: 9 }
  ]
}

export const CustomColors = Template.bind({})
CustomColors.args = {
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: [
    '#b6ec78',
    '#64c052',
    '#2d8d20',
    '#ddaa1f',
    '#b6922f',
    '#db5a5a',
    '#e42727'
  ],
  legend: 'Dias'
}

export const CustomColors2 = Template.bind({})
CustomColors2.args = {
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: 'blues',
  legend: 'Dias'
}

export const Vertical = Template.bind({})
Vertical.args = {
  vertical: true,
  steps: [
    { name: 'Some Step', count: 4 },
    { name: 'Some Step', count: 8.2 },
    { name: 'Some Step', count: 5 },
    { name: 'Some Step name', count: 13.4 },
    { name: 'Some Step', count: 9 },
    { name: 'Some Step', count: 4 },
    { name: 'Another Step', count: 9 },
    { name: 'Some Step', count: 14.2 },
    { name: 'Some Step', count: 9 }
  ],
  colors: 'blues'
}
