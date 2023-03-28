import React, { useMemo, useState } from 'react'

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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
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
}

const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  defaultGrouping = [],
  groupingExpand,
  showGroupingIndex = true,
  showGroupingRowCount = true,
  allowManualGrouping = false,
  tableOptions
}: Props<T>): React.ReactElement => {
  const [grouping, setGrouping] = useState<GroupingState>(defaultGrouping)
  const [expanded, setExpanded] = useState<ExpandedState>(groupingExpand || {})

  const tableState = useMemo(() => {
    // Set default grouping state, if passed, otherwise keep it uncontrolled
    const tableState: Partial<TableState> = {}

    if (grouping.length) {
      tableState.grouping = grouping
    }

    if (
      (expanded !== undefined && !!Object.keys(expanded).length) ||
      expanded === true
    ) {
      tableState.expanded = expanded
    }

    return tableState
  }, [grouping, expanded])

  const table = useReactTable({
    data,
    columns,
    state: tableState,
    onGroupingChange: setGrouping,
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: false,
    ...tableOptions
  })

  return (
    <Table>
      <TableHead>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableCell key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>
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
                    </div>
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
            <TableRow key={row.id}>
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
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default DataTable
