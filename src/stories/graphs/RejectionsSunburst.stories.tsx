import React from 'react'

import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Grid, Card } from '@mui/material'

import RejectionsSunburst, {
  Props
} from '../../components/graphs/RejectionsSunburst'

export default {
  title: 'Graphs/RejectionsSunburst',
  component: RejectionsSunburst
} as ComponentMeta<typeof RejectionsSunburst>

const Template: ComponentStory<typeof RejectionsSunburst> = (args) => (
  <Grid container style={{ height: 500 }}>
    <Card style={{ height: '100%', width: '100%', padding: 24 }}>
      <RejectionsSunburst {...args} />
    </Card>
  </Grid>
)

const data: Props['data'] = {
  name: 'rejections',
  color: 'hsl(258, 70%, 50%)',
  children: [
    {
      name: 'Sem interesse',
      children: [
        {
          count: 45,
          name: 'Sem interesse - VVVVVV',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 12,
          name: 'Sem interesse - ZZZZZZ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 6,
          name: 'Sem interesse - XXXXXXX',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'Técnico',
      children: [
        {
          count: 23,
          name: 'Técnico - QQQQQQQQ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 67,
          name: 'Técnico - DDDDDD',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 23,
          name: 'Técnico - BBBBBB',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 43,
          name: 'Técnico - CCCCCC',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 54,
          name: 'Técnico - AAAAAA',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 76,
          name: 'Técnico - YYYYYY',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 4,
          name: 'Técnico - GGGGGG',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'Outros',
      children: [
        {
          count: 12,
          name: 'Outros - FFFFF',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 4,
          name: 'Outros - VVVVV',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    },
    {
      name: 'Comportamental',
      children: [
        {
          count: 7,
          name: 'Comportamental - XXXXX',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 2,
          name: 'Comportamental - ZZZZZ',
          color: 'hsl(13, 70%, 50%)'
        },
        {
          count: 2,
          name: 'Comportamental - YYYYY',
          color: 'hsl(13, 70%, 50%)'
        }
      ]
    }
  ]
}

export const CommonRejection: Story<Props> = Template.bind({})
CommonRejection.args = {
  data
}
