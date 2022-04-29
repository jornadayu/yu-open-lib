import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Card, CardContent, Grid } from '@mui/material'

import { Props } from '../../components/chips/StatusChip'
import { StatusChip } from '../../index'

export default {
  title: 'Chips/StatusChip',
  component: StatusChip,
  parameters: {
    badges: ['Added: v2.3.6']
  }
} as ComponentMeta<typeof StatusChip>

type Status = 'canceled' | 'open' | 'on_hold' | 'inactive' | 'active'

const Template: ComponentStory<typeof StatusChip> = (args) => {
  const canceled: Status = 'canceled'
  const open: Status = 'open'
  const onHold: Status = 'on_hold'
  const inactive: Status = 'inactive'
  const active: Status = 'active'

  return (
    <Card variant='outlined'>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item>
            <StatusChip {...args} value={canceled} label='Canceled' />
          </Grid>

          <Grid item>
            <StatusChip {...args} value={open} label='Open' />
          </Grid>

          <Grid item>
            <StatusChip {...args} value={onHold} label='On Hold' />
          </Grid>

          <Grid item>
            <StatusChip {...args} value={inactive} label='Inactive' />
          </Grid>

          <Grid item>
            <StatusChip {...args} value={active} label='Active' />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export const Example: Story<Props> = Template.bind({})
Example.args = {
  successValues: ['open', 'active'],
  errorValues: ['canceled', 'inactive'],
  warningValues: ['on_hold']
}

export const WithTooltip: Story<Props> = Template.bind({})
WithTooltip.args = {
  successValues: ['open', 'active'],
  errorValues: ['canceled', 'inactive'],
  warningValues: ['on_hold'],
  tooltip: 'Some Tooltip'
}
