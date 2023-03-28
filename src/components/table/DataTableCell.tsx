import React from 'react'

import { Cell, ExpandedState, Row, flexRender } from '@tanstack/react-table'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { IconButton, TableCell } from '@mui/material'

export type Props<T extends Record<string, any>> = {
  cell: Cell<T, unknown>
  row: Row<T>
  groupingExpand: ExpandedState | undefined
}

const DataTableCell = <T extends Record<string, any>>({
  cell,
  row,
  groupingExpand
}: Props<T>): React.ReactElement => {
  return (
    <TableCell>
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
                {row.getIsExpanded() ? <ExpandLess /> : <ExpandMore />}{' '}
              </IconButton>
              {flexRender(cell.column.columnDef.cell, cell.getContext())} (
              {row.subRows.length})
            </React.Fragment>
          ) : (
            <React.Fragment>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </React.Fragment>
          )}
        </React.Fragment>
      ) : cell.getIsAggregated() ? (
        // If the cell is aggregated, use the Aggregated
        // renderer for cell
        flexRender(
          cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
          cell.getContext()
        )
      ) : cell.getIsPlaceholder() ? null : ( // For cells with repeated values, render null
        // Otherwise, just render the regular cell
        flexRender(cell.column.columnDef.cell, cell.getContext())
      )}
    </TableCell>
  )
}

export default DataTableCell
