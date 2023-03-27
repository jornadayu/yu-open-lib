import React, { useMemo, useState } from 'react'

import {
  ColumnDef,
  ExpandedState,
  GroupingState,
  TableState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { TableOptions } from '@tanstack/table-core'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

import TableGroupToggle from './TableGroupToggle'
import YuTableCell from './YuTableCell'

export type Props<T extends Record<string, any>> = {
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
} & Partial<TableOptions<T>>

const YuTable = <T extends Record<string, any>>({
  data,
  columns,
  defaultGrouping = [],
  groupingExpand = undefined,
  showGroupingIndex = true,
  ...tableOptions
}: Props<T>): React.ReactElement => {
  const [grouping, setGrouping] = useState<GroupingState>(defaultGrouping)

  const tableState = useMemo<Partial<TableState>>(() => {
    if (groupingExpand !== undefined) {
      // Only manually pass 'expanded' if the prop is defined
      // that way, the user can manually expand and collapse instead
      // of a fixed state
      return {
        grouping,
        expanded: groupingExpand
      }
    }

    return {
      grouping
    }
  }, [grouping, groupingExpand])

  const table = useReactTable({
    data,
    columns,
    state: tableState,
    onGroupingChange: setGrouping,
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
                      {header.column.getCanGroup() ? (
                        <TableGroupToggle
                          header={header}
                          showGroupingIndex={showGroupingIndex}
                        />
                      ) : null}

                      <Typography
                        variant='body1'
                        sx={{
                          fontWeight: 600
                        }}
                      >
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
                  <YuTableCell
                    row={row}
                    cell={cell}
                    key={cell.id}
                    groupingExpand={groupingExpand}
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

export default YuTable
