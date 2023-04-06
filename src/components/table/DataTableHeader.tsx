import React from 'react'

import { Table, flexRender } from '@tanstack/react-table'

import { Box, TableCell, TableRow, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'

import DataTableGroupToggle from './DataTableGroupToggle'

export type Props<T extends Record<string, any>> = {
  table: Table<T>
}
const DataTableHeader = <T extends Record<string, any>>({
  table
}: Props<T>): React.ReactElement => {
  const theme = useTheme()

  return (
    <React.Fragment>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell
              key={header.id}
              colSpan={header.colSpan}
              width={header.getSize()}
              variant='head'
              sx={{
                bgcolor:
                  theme.palette.mode === 'dark' ? 'background.paper' : '#f5f5f5'
              }}
            >
              {header.isPlaceholder ? null : (
                <Box>
                  <Typography
                    variant='body1'
                    sx={{
                      fontWeight: 600
                    }}
                  >
                    {header.column.getCanGroup() ? (
                      <DataTableGroupToggle header={header} />
                    ) : null}
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </Typography>
                </Box>
              )}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </React.Fragment>
  )
}

export default DataTableHeader
