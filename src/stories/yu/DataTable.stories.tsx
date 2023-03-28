import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import {
  Badge as BadgeIcon,
  Cancel,
  CheckCircleOutline
} from '@mui/icons-material'
import {
  Avatar,
  Card,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'

import { Props } from '../../components/table/DataTable'
import { ContactChip, DataTable } from '../../index'

export default {
  title: 'YU/DataTable',
  component: DataTable,
  parameters: {
    badges: ['Added: v3.0.0']
  }
} as Meta<typeof DataTable>

type Application = {
  id: number
  manager: string
  name: string
  status: 'Active' | 'Placed' | 'Rejected'
  linkedinUrl?: string
  phoneNumber?: string
  email?: string
  position: string
}

const data: Application[] = [
  {
    id: 1,
    manager: 'Foo',
    name: 'John',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Dev'
  },
  {
    id: 2,
    manager: 'Foo',
    name: 'Doe',
    status: 'Placed',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Dev'
  },
  {
    id: 3,
    manager: 'Bar',
    name: 'Jane',
    status: 'Rejected',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Dev'
  },
  {
    id: 4,
    manager: 'Bar',
    name: 'Doe',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'DevOps'
  },
  {
    id: 5,
    manager: 'Foo',
    name: 'John',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Lead'
  },
  {
    id: 6,
    manager: 'Foo',
    name: 'Doe',
    status: 'Placed',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Lead'
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

const Template: StoryFn<typeof DataTable> = (args) => {
  return (
    <Grid container>
      <Card sx={{ width: '100%', height: '12000' }}>
        <DataTable
          {...(args as Partial<Props<Application>>)}
          columns={[
            {
              accessorKey: 'manager',
              header: 'Manager',
              cell: (info) => (
                <ListItem disablePadding>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText primary={info.getValue()} />
                </ListItem>
              ),
              accessorFn: (row) => row.manager,
              enableGrouping: false
            },
            {
              accessorKey: 'position',
              header: 'Job Position',
              cell: (info) => info.getValue(),
              enableGrouping: false
            },
            {
              id: 'name',
              accessorKey: 'name',
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
              enableGrouping: true
            },
            {
              id: 'contactInfo',
              header: () => <span>Contact Info</span>,
              cell: (info) => (
                <Grid container spacing={1}>
                  <Grid item>
                    <ContactChip
                      variant='linkedin'
                      value={info.cell.row.original.linkedinUrl as string}
                      copyable
                    />
                  </Grid>

                  <Grid item>
                    <ContactChip
                      variant='whatsapp'
                      value={info.cell.row.original.phoneNumber as string}
                      copyable
                      copyAs='phoneNumber'
                    />
                  </Grid>

                  <Grid item>
                    <ContactChip
                      variant='email'
                      value={info.cell.row.original.email as string}
                      copyable
                    />
                  </Grid>
                </Grid>
              ),
              enableGrouping: false
            }
          ]}
          data={data}
        />
      </Card>
    </Grid>
  )
}

export const GroupedDataExpanded = Template.bind({})
GroupedDataExpanded.args = {
  defaultGrouping: ['manager', 'position'],
  groupingExpand: true,
  showGroupingIndex: false
}

export const GroupedDataExpandedManual = Template.bind({})
GroupedDataExpandedManual.args = {
  defaultGrouping: ['manager', 'position'],
  groupingExpand: true,
  allowManualGrouping: true
}

export const Ungrouped = Template.bind({})
Ungrouped.args = {}

export const GroupedDataManualExpanding = Template.bind({})
GroupedDataManualExpanding.args = {
  defaultGrouping: ['manager']
}
