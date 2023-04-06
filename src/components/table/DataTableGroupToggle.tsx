import React, { memo, useMemo } from 'react'

import { Header } from '@tanstack/react-table'

import { AutoAwesomeMosaic } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'

import { useDataTable } from './useDataTable'

export type Props<T extends Record<string, any>> = {
  header: Header<T, unknown>
}

const DataTableGroupToggle = <T extends Record<string, any>>({
  header
}: Props<T>): React.ReactElement => {
  const { showGroupingIndex } = useDataTable()

  return useMemo(
    () => (
      <React.Fragment>
        {/* If the header can be grouped, let's add a toggle */}
        <IconButton
          onClick={header.column.getToggleGroupingHandler()}
          sx={{ mr: 1 }}
        >
          <Badge
            color='success'
            badgeContent={
              showGroupingIndex ? header.column.getGroupedIndex() + 1 : 0
            }
          >
            <AutoAwesomeMosaic
              sx={{
                color: header.column.getIsGrouped() ? 'primary.main' : 'inherit'
              }}
            />
          </Badge>
        </IconButton>{' '}
      </React.Fragment>
    ),
    [header, showGroupingIndex]
  )
}

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/37087#issuecomment-656596623
export default memo(DataTableGroupToggle) as typeof DataTableGroupToggle
