import React from 'react'

import { Header } from '@tanstack/react-table'

import { AutoAwesomeMosaic } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'

export type Props<T extends Record<string, any>> = {
  header: Header<T, unknown>
  showGroupingIndex?: boolean
}

const DataTableGroupToggle = <T extends Record<string, any>>({
  header,
  showGroupingIndex = false
}: Props<T>): React.ReactElement => {
  return (
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
  )
}

export default DataTableGroupToggle
