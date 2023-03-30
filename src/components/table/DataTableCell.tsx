import React, { memo, useMemo } from 'react'

import { Cell, Row, flexRender } from '@tanstack/react-table'

import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Button, TableCell, TableCellProps } from '@mui/material'

import { useDataTable } from './useDataTable'

export type Props<T extends Record<string, any>> = {
  cell: Cell<T, unknown>
  row: Row<T>
} & TableCellProps

const DataTableCell = <T extends Record<string, any>>({
  cell,
  row,
  ...tableCellProps
}: Props<T>): React.ReactElement => {
  const { groupingExpand, showGroupingRowCount, allowManualGrouping } =
    useDataTable()

  return useMemo(
    () => (
      <TableCell {...tableCellProps}>
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
    ),
    [cell, row, groupingExpand, showGroupingRowCount, allowManualGrouping]
  )
}

// https:// github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#issuecomment-656596623
export default memo(DataTableCell) as typeof DataTableCell
