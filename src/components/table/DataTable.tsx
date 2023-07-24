import React from 'react'

import {
  ColumnDef,
  ExpandedState,
  GroupingState,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getGroupedRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { Table, TableOptions, TableState } from '@tanstack/table-core'

import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableHead,
  TableRow,
  TextFieldProps
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import DataTableHeader from './DataTableHeader'
import DataTablePagination from './DataTablePagination'
import DataTableRow from './DataTableRow'
import DataTableSearch, { fuzzyFilter } from './DataTableSearch'
import { DataTableProvider } from './useDataTable'

export type DataModel = Record<string, any>

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
   * Optional customization options to pass directly to react-table 'useReactTable' hook
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
   * Add search input to DataTable?
   *
   * @default false
   */
  searchable?: boolean
  /**
   * Props to pass to search input, if 'searchable' is enabled
   */
  searchInputProps?: Partial<TextFieldProps>
  /**
   * Highlight rows (including grouped rows) when hovering them?
   *
   * @default true
   */
  highlightOnHover?: boolean
  /**
   * Custom header items to render in the table header
   */
  headerItems?: CustomHeaderItem<T>[]
}

export type CustomHeaderItem<T> = {
  id: string
  render: (table: Table<T>) => React.ReactNode
}

const InnerDataTable = <T extends DataModel>({
  columns,
  data,
  defaultGrouping = [],
  headerItems = [],
  groupingExpand,
  tableContainerProps,
  withPagination = true,
  pageSize = 15,
  searchable = false,
  searchInputProps,
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
    globalFilterFn: fuzzyFilter,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    ...tableOptions
  })

  const { grouping } = table.getState()
  const theme = useTheme()

  return (
    <TableContainer {...tableContainerProps}>
      <MuiTable stickyHeader>
        <TableHead>
          {(searchable || headerItems.length > 0) && (
            <TableRow>
              {searchable && (
                <DataTableSearch
                  table={table}
                  searchInputProps={searchInputProps}
                />
              )}

              {headerItems.map((item) => (
                <TableCell key={item.id} sx={{ border: 'none' }}>
                  {item.render(table)}
                </TableCell>
              ))}
            </TableRow>
          )}

          <DataTableHeader table={table} />
        </TableHead>

        <TableBody
          sx={{
            bgcolor: theme.palette.background.default
          }}
        >
          {table.getRowModel().rows.map((row) => (
            <DataTableRow row={row} key={row.id} grouping={grouping} />
          ))}
        </TableBody>

        {withPagination && <DataTablePagination table={table} />}
      </MuiTable>
    </TableContainer>
  )
}

const DataTable = <T extends DataModel>(
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
