import React, { useMemo } from 'react'

import { GroupingState, Row } from '@tanstack/react-table'

import { TableRow } from '@mui/material'

import DataTableCell from './DataTableCell'
import { useDataTable } from './useDataTable'

export type Props<T extends Record<string, any>> = {
  row: Row<T>
  grouping: GroupingState
}

const DataTableRow = <T extends Record<string, any>>({
  row,
  grouping
}: Props<T>): React.ReactElement => {
  const { highlightOnHover } = useDataTable()
  const isHovering = row.getIsSelected()

  const expandedRow = row.getIsExpanded()

  return useMemo(
    () => (
      <TableRow
        onMouseOver={() => {
          if (highlightOnHover && !isHovering) {
            row.toggleSelected(true)
          }
        }}
        onMouseLeave={() => {
          if (highlightOnHover && isHovering) {
            row.toggleSelected(false)
          }
        }}
        sx={{
          bgcolor: isHovering ? 'action.hover' : 'default'
        }}
      >
        {row.getVisibleCells().map((cell) => {
          return (
            <React.Fragment key={cell.id}>
              <DataTableCell row={row} cell={cell} />
            </React.Fragment>
          )
        })}
      </TableRow>
    ),
    // WARN: When changing this component, re-enable the exhaustive-deps rule temporarily
    // to make sure the useMemo dependencies make sense, take the comments below into consideration
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      row,
      // Row expansion is a dependency so cells are re-rendered when a row is expanded/collapsed
      expandedRow,
      isHovering,
      highlightOnHover,
      // Re-render rows when grouping changes
      grouping
    ]
  )
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#issuecomment-656596623
export default DataTableRow
