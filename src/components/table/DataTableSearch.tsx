import React, { useMemo } from 'react'

import { RankingInfo, rankItem } from '@tanstack/match-sorter-utils'
import { FilterFn, Table } from '@tanstack/react-table'

import { Search } from '@mui/icons-material'
import { TableCell, TextField, TextFieldProps } from '@mui/material'

export type Props<T extends Record<string, any>> = {
  table: Table<T>
  searchInputProps?: Partial<TextFieldProps>
}

export const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy?: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const DataTableSearch = <T extends Record<string, any>>({
  table,
  searchInputProps
}: Props<T>): React.ReactElement => {
  return useMemo(
    () => (
      <TableCell>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: <Search sx={{ mr: 1 }} />,
            sx: {
              borderRadius: 3
            }
          }}
          sx={{ ml: -1.4 }}
          onChange={({ target }) => {
            table.setState((state) => ({
              ...state,
              globalFilter: target.value
            }))
          }}
          {...searchInputProps}
        />
      </TableCell>
    ),
    [table, searchInputProps]
  )
}

export default DataTableSearch
