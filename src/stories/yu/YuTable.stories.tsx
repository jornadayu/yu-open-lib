import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Grid } from '@mui/material'

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
const Template: StoryFn<typeof YuTable> = () => {
  return (
    <Grid container>
      <YuTable
        defaultGrouping={['manager']}
        // groupingExpand
        columns={[
          {
            accessorKey: 'manager',
            header: 'Manager',
            cell: (info) => info.getValue(),
            accessorFn: (row) => row.manager
          },
          {
            accessorFn: (row) => row.name,
            id: 'name',
            header: () => <span>Name</span>,
            cell: (info) => info.getValue()
          }
        ]}
        data={data}
      />
    </Grid>
  )
}

export const Example = Template.bind({})
Example.args = {}
