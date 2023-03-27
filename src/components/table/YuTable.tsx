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

import { AutoAwesomeMosaic, ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Badge,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'

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
                        // If the header can be grouped, let's add a toggle
                        <IconButton
                          onClick={header.column.getToggleGroupingHandler()}
                          sx={{ mr: 1 }}
                        >
                          <Badge
                            color='success'
                            badgeContent={
                              showGroupingIndex
                                ? header.column.getGroupedIndex() + 1
                                : 0
                            }
                          >
                            <AutoAwesomeMosaic
                              sx={{
                                color: header.column.getIsGrouped()
                                  ? 'primary.main'
                                  : 'inherit'
                              }}
                            />
                          </Badge>
                        </IconButton>
                      ) : null}{' '}
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
                  <TableCell key={cell.id}>
                    {cell.getIsGrouped() ? (
                      // If it's a grouped cell, add an expander and row count
                      <React.Fragment>
                        {/* If a manual grouping expand state was passed, don't allow manually changing it */}
                        {groupingExpand === undefined ? (
                          <React.Fragment>
                            <IconButton
                              size='small'
                              sx={{
                                mr: 1
                              }}
                              onClick={row.getToggleExpandedHandler()}
                              disabled={!row.getCanExpand()}
                            >
                              {row.getIsExpanded() ? (
                                <ExpandLess />
                              ) : (
                                <ExpandMore />
                              )}{' '}
                            </IconButton>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}{' '}
                            ({row.subRows.length})
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </React.Fragment>
                        )}
                      </React.Fragment>
                    ) : cell.getIsAggregated() ? (
                      // If the cell is aggregated, use the Aggregated
                      // renderer for cell
                      flexRender(
                        cell.column.columnDef.aggregatedCell ??
                          cell.column.columnDef.cell,
                        cell.getContext()
                      )
                    ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
                      // Otherwise, just render the regular cell
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </TableCell>
                )
              })}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
    /* <div className='h-2' />
      <div className='flex items-center gap-2'>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(0)}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className='border rounded p-1'
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
        <span className='flex items-center gap-1'>
          <div>Page</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </strong>
        </span>
        <span className='flex items-center gap-1'>
          | Go to page:
          <input
            type='number'
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              table.setPageIndex(page)
            }}
            className='border p-1 rounded w-16'
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getRowModel().rows.length} Rows</div>
      <div>
        <button onClick={() => rerender()}>Force Rerender</button>
      </div>
      <pre>{JSON.stringify(grouping, null, 2)}</pre> */
  )
}

export default YuTable