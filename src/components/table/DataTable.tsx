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
  Typography,
  styled
} from '@mui/material'

import DataTableCell from './DataTableCell'
import DataTableGroupToggle from './DataTableGroupToggle'

export type DataModel = {
  [key: string]: any
}

export type Props<T> = {
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
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  defaultGrouping = [],
  groupingExpand,
  showGroupingIndex = true,
  showGroupingRowCount = true,
  allowManualGrouping = false,
  tableContainerProps,
  tableOptions
}: Props<T>): React.ReactElement => {
  const initialState: Partial<TableState> = {
    pagination: {
      // Can't be data.length by default because it won't account for placeholder cells
      // when rows are grouped
      // TODO: Implement pagination
      pageSize: 99999999,
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
      <Table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
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
                            <DataTableGroupToggle
                              header={header}
                              showGroupingIndex={showGroupingIndex}
                            />
                          ) : null}
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </Typography>
                      </Box>
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <StyledTableRow key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <DataTableCell
                      row={row}
                      cell={cell}
                      key={cell.id}
                      groupingExpand={groupingExpand}
                      showGroupingRowCount={showGroupingRowCount}
                      allowManualGrouping={allowManualGrouping}
                    />
                  )
                })}
              </StyledTableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DataTable
