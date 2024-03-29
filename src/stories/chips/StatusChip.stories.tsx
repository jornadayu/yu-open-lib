import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Card, CardContent, Grid, Typography } from '@mui/material'

import { StatusChip } from '../../index'

export default {
  title: 'Chips/StatusChip',
  component: StatusChip,
  parameters: {
    badges: ['Added: v2.3.6']
  }
} as Meta<typeof StatusChip>

type Status = 'canceled' | 'open' | 'on_hold' | 'inactive' | 'active'

const Template: StoryFn<typeof StatusChip> = (args) => {
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
            <StatusChip
              {...args}
              value={canceled}
              label={args.label || 'Canceled'}
              onDelete={undefined}
            />
          </Grid>

          <Grid item>
            <StatusChip
              {...args}
              value={open}
              label={args.label || 'Open'}
              onDelete={undefined}
            />
          </Grid>

          <Grid item>
            <StatusChip
              {...args}
              value={onHold}
              label={args.label || 'On Hold'}
              onDelete={undefined}
            />
          </Grid>

          <Grid item>
            <StatusChip
              {...args}
              value={inactive}
              label={args.label || 'Inactive'}
              onDelete={undefined}
            />
          </Grid>

          <Grid item>
            <StatusChip
              {...args}
              value={active}
              label={args.label || 'Active'}
              onDelete={undefined}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export const Example = Template.bind({})
Example.args = {
  successValues: ['open', 'active'],
  errorValues: ['canceled', 'inactive'],
  warningValues: ['on_hold']
}

export const CustomLabel = Template.bind({})
CustomLabel.args = {
  successValues: ['open', 'active'],
  errorValues: ['canceled', 'inactive'],
  warningValues: ['on_hold'],
  label: <Typography variant='subtitle1'>Some label</Typography>
}

export const WithTooltip = Template.bind({})
WithTooltip.args = {
  successValues: ['open', 'active'],
  errorValues: ['canceled', 'inactive'],
  warningValues: ['on_hold'],
  tooltip: 'Some Tooltip'
}
