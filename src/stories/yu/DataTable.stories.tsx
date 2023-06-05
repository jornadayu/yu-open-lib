import React from 'react'

import { Meta, StoryFn } from '@storybook/react'
import { CellContext } from '@tanstack/react-table'

import {
  Badge as BadgeIcon,
  Cancel,
  CheckCircleOutline
} from '@mui/icons-material'
import {
  Avatar,
  Button,
  Chip,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'

import { DataTableProps } from '../../components/table/DataTable'
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
    name: 'DevJohn',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail2@gmail.com',
    position: 'Dev'
  },
  {
    id: 7,
    manager: 'Foo',
    name: 'DevFoo',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Dev'
  },
  {
    id: 2,
    manager: 'Foo',
    name: 'DevDoe',
    status: 'Placed',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Dev'
  },
  {
    id: 3,
    manager: 'Bar',
    name: 'DataJane',
    status: 'Rejected',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Data Analyst'
  },
  {
    id: 4,
    manager: 'Bar',
    name: 'DevOpsJoe',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'DevOps'
  },
  {
    id: 5,
    manager: 'Foo',
    name: 'LeadJohn',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Lead'
  },
  {
    id: 5,
    manager: 'Foo',
    name: 'LeadBar',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'foobarfakeemail@gmail.com',
    position: 'Lead'
  },
  {
    id: 6,
    manager: 'Foo',
    name: 'LeadDoe',
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
      <DataTable
        {...(args as Partial<DataTableProps<Application>>)}
        columns={[
          {
            accessorKey: 'manager',
            header: 'Manager',
            cell: (info: CellContext<Application, React.ReactNode>) => (
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
            accessorFn: (row) =>
              [row.linkedinUrl, row.phoneNumber, row.email].join(','),
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
        tableContainerProps={{
          sx: {
            maxHeight: 'calc(100vh - 50px)'
          }
        }}
        data={(args as Partial<DataTableProps<Application>>).data || data}
      />
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

export const Searchable = Template.bind({})
Searchable.args = {
  defaultGrouping: ['manager'],
  groupingExpand: true,
  searchable: true,
  searchInputProps: {
    placeholder: 'Search on any column'
  }
}

export const CustomHeaderItems = Template.bind({})
CustomHeaderItems.args = {
  defaultGrouping: ['manager'],
  groupingExpand: true,
  headerItems: [
    {
      id: 'filter-manager',
      render() {
        return (
          <Button color='primary' variant='outlined'>
            Do Custom Thing
          </Button>
        )
      }
    },
    {
      id: 'filter-position',
      render() {
        return (
          <Button color='secondary' variant='outlined'>
            Do Another Thing
          </Button>
        )
      }
    }
  ]
}

export const Pagination = Template.bind({})
Pagination.args = {
  defaultGrouping: ['manager', 'position'],
  groupingExpand: true,
  showGroupingIndex: false,
  withPagination: true,
  pageSize: 8,
  data: [
    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      manager: 'Foo',
      name: 'John' + i,
      status: 'Active',
      linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
      phoneNumber: '5511123456789',
      email: 'aaa@email.com',
      position: 'Dev'
    })),

    ...Array.from({ length: 8 }, (_, i) => ({
      id: i + 1,
      manager: 'Bar',
      name: 'Joe' + i,
      status: 'Rejected',
      linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
      phoneNumber: '5511123456789',
      email: 'aaa@email.com',
      position: 'Dev'
    }))
  ]
}

export const Scrollable = Template.bind({})
Scrollable.args = {
  data: Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    manager: 'Foo' + i,
    name: 'John',
    status: 'Active',
    linkedinUrl: 'https://www.linkedin.com/in/john-doe-fake-linkedin/',
    phoneNumber: '5511123456789',
    email: 'aaa@email.com',
    position: 'Dev'
  })),
  withPagination: false
}
