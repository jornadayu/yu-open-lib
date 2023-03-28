import React from 'react'

import { Cell, ExpandedState, Row, flexRender } from '@tanstack/react-table'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Button, TableCell } from '@mui/material'

export type Props<T extends Record<string, any>> = {
  cell: Cell<T, unknown>
  row: Row<T>
  groupingExpand: ExpandedState | undefined
  /**
   * Show number of rows in group cell?
   *
   * @default true
   */
  showGroupingRowCount?: boolean
  /**
   * Allow user to manually collapse/group rows even if a default list of
   * grouping columns is passed
   *
   * @default false
   */
  allowManualGrouping?: boolean
}

const DataTableCell = <T extends Record<string, any>>({
  cell,
  row,
  groupingExpand,
  showGroupingRowCount = true,
  allowManualGrouping = false
}: Props<T>): React.ReactElement => {
  return (
    <TableCell>
      {cell.getIsGrouped() ? (
        // If it's a grouped cell, add an expander and row count
        <React.Fragment>
          {/* If a manual grouping expand state was passed, don't allow manually changing it */}
          {groupingExpand === undefined || allowManualGrouping ? (
            <React.Fragment>
              <Button
                startIcon={
                  row.getIsExpanded() ? <ExpandLess /> : <ExpandMore />
                }
                onClick={row.getToggleExpandedHandler()}
                disabled={!row.getCanExpand()}
                sx={{
                  color: 'text.secondary',
                  borderColor: 'text.secondary',
                  textTransform: 'none',
                  // Show pointer cursor in custom cell render sub-components
                  '& *': {
                    cursor: 'pointer'
                  }
                }}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}

                {showGroupingRowCount && (
                  <div style={{ marginLeft: 4 }}>({row.subRows.length})</div>
                )}
              </Button>
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
