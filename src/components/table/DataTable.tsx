import React from 'react'

import {
  ColumnDef,
  ExpandedState,
  GroupingState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { TableOptions, TableState } from '@tanstack/table-core'

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import DataTableGroupToggle from './DataTableGroupToggle'
import DataTablePagination from './DataTablePagination'
import DataTableRow from './DataTableRow'
import { DataTableProvider } from './useDataTable'

export type DataModel = {
  [key: string]: any
}

export type DataTableProps<T> = {
  columns: ColumnDef<T>[]
  data: T[]
  /**
   * Default columns to group by
   *
   * @default []
   */
  defaultGrouping?: GroupingState
  /**
   * State of grouping expansion, pass `true` to always keep expanded
   *
   * @default undefined
   */
  groupingExpand?: ExpandedState
  /**
   * Show grouping index in the grouping icon button for grouped columns?
   *
   * @default true
   */
  showGroupingIndex?: boolean
  /**
   * Show number of rows in group cell?
   *
   * @default true
   */
  showGroupingRowCount?: boolean
  /**
   * Optional customization options to pass directly to react-table 'useTable' hook
   */
  tableOptions?: Partial<TableOptions<T>>
  /**
   * Allow user to manually collapse/group rows even if a default list of
   * grouping columns is passed
   *
   * @default false
   */
  allowManualGrouping?: boolean
  tableContainerProps?: Partial<TableContainerProps>
  /**
   * Show pagination controls?
   *
   * @default true
   */
  withPagination?: boolean
  /**
   * Page size when pagination is enabled
   *
   * @default 15
   */
  pageSize?: number
  /**
   * Highlight rows (including grouped rows) when hovering them?
   *
   * @default true
   */
  highlightOnHover?: boolean
}

const InnerDataTable = <T extends Record<string, any>>({
  columns,
  data,
  defaultGrouping = [],
  groupingExpand,
  tableContainerProps,
  withPagination = true,
  pageSize = 15,
  tableOptions
}: DataTableProps<T>): React.ReactElement => {
  const initialState: Partial<TableState> = {
    pagination: {
      pageSize: withPagination ? pageSize : -1,
      pageIndex: 0
    }
  }

  // Set default grouping state, if passed, otherwise keep it uncontrolled
  if (defaultGrouping.length) {
    initialState.grouping = defaultGrouping
  }

  // If user has manually expanded groups, keep that state, otherwise use default
  // passed by props/local state
  if (groupingExpand !== undefined) {
    initialState.expanded = groupingExpand
  }

  const table = useReactTable({
    data,
    columns,
    initialState,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...tableOptions
  })

  return (
    <TableContainer {...tableContainerProps}>
      <Table stickyHeader>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              sx={{
                bgcolor: 'action.hover'
              }}
            >
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  colSpan={header.colSpan}
                  width={header.getSize()}
                  variant='head'
                >
                  {header.isPlaceholder ? null : (
                    <Box>
                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 600
                        }}
                      >
                        {header.column.getCanGroup() ? (
                          <DataTableGroupToggle header={header} />
                        ) : null}
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </Typography>
                    </Box>
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <DataTableRow row={row} key={row.id} />
          ))}
        </TableBody>

        {withPagination && <DataTablePagination table={table} />}
      </Table>
    </TableContainer>
  )
}

const DataTable = <T extends Record<string, any>>(
  props: DataTableProps<T>
): React.ReactElement => (
  <DataTableProvider
    allowManualGrouping={props.allowManualGrouping ?? false}
    groupingExpand={props.groupingExpand}
    showGroupingRowCount={props.showGroupingRowCount ?? true}
    showGroupingIndex={props.showGroupingIndex ?? true}
    highlightOnHover={props.highlightOnHover ?? true}
  >
    <InnerDataTable {...props} />
  </DataTableProvider>
)

export default DataTable
