import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import {
  Badge as BadgeIcon,
  Cancel,
  CheckCircleOutline
} from '@mui/icons-material'
import { Chip, Grid } from '@mui/material'

import { YuTable } from '../../index'

export default {
  title: 'YU/YuTable',
  component: YuTable,
  parameters: {
    badges: ['Added: v3.0.0']
  }
} as Meta<typeof YuTable>

type Application = {
  manager: string
  name: string
  status: 'Active' | 'Placed' | 'Rejected'
}

const data: Application[] = [
  {
    manager: 'Foo',
    name: 'John',
    status: 'Active'
  },
  {
    manager: 'Foo',
    name: 'Doe',
    status: 'Placed'
  },
  {
    manager: 'Bar',
    name: 'Jane',
    status: 'Rejected'
  }
]

const getStatusIcon = (status: Application['status']) => {
  switch (status) {
    case 'Active':
      return <CheckCircleOutline sx={{ color: 'primary.main' }} />
    case 'Placed':
      return <BadgeIcon sx={{ color: 'success.main' }} />
    case 'Rejected':
      return <Cancel sx={{ color: 'error.main' }} />
  }
}

const getChipColor = (status: Application['status']) => {
  switch (status) {
    case 'Active':
      return 'primary'
    case 'Placed':
      return 'success'
    case 'Rejected':
      return 'error'
  }
}

const Template: StoryFn<typeof YuTable> = (args) => {
  return (
    <Grid container>
      <YuTable
        {...args}
        columns={[
          {
            accessorKey: 'manager',
            header: 'Manager',
            cell: (info) => info.getValue(),
            accessorFn: (row) => row.manager,
            enableGrouping: false
          },
          {
            accessorFn: (row) => row.name,
            id: 'name',
            header: () => <span>Name</span>,
            cell: (info) => info.getValue(),
            enableGrouping: false
          },
          {
            accessorKey: 'status',
            id: 'status',
            header: () => <span>Status</span>,
            cell: (info) => (
              <Chip
                label={info.getValue() as string}
                icon={getStatusIcon(info.getValue() as Application['status'])}
                color={getChipColor(info.getValue() as Application['status'])}
              />
            ),
            enableGrouping: false
          }
        ]}
        data={data}
      />
    </Grid>
  )
}

export const GroupedDataExpanded = Template.bind({})
GroupedDataExpanded.args = {
  defaultGrouping: ['manager'],
  groupingExpand: true,
  showGroupingIndex: false
}

export const GroupedDataManualExpanding = Template.bind({})
GroupedDataManualExpanding.args = {
  defaultGrouping: ['manager']
}
