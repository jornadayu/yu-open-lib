import React, { useMemo } from 'react'

import { Table } from '@tanstack/react-table'

import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import { TableFooter, TablePagination, TableRow } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'

interface TablePaginationActionsProps {
  count: number
  page: number
  rowsPerPage: number
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void
}

export const TablePaginationActions = ({
  count,
  page,
  rowsPerPage,
  onPageChange
}: TablePaginationActionsProps): React.ReactElement => {
  const theme = useTheme()
  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='first page'
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='previous page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='next page'
      >
        {theme.direction === 'rtl' ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='last page'
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

export type DataTablePaginationProps<T> = {
  table: Table<T>
}

const DataTablePagination = <T extends Record<string, any>>({
  table
}: DataTablePaginationProps<T>): React.ReactElement | null => {
  const fullRowLength = table.getPrePaginationRowModel().rows.length
  const pageSize = table.getState().pagination.pageSize

  if (fullRowLength < pageSize) {
    // No need to paginate if there's not enough rows for a second page
    return null
  }

  const pageIndex = table.getState().pagination.pageIndex

  return useMemo(
    () => (
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={fullRowLength}
            rowsPerPage={pageSize}
            page={pageIndex}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page'
              }
            }}
            onPageChange={(_event, page) => table.setPageIndex(page)}
            onRowsPerPageChange={(event) =>
              table.setPageSize(Number(event.target.value))
            }
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    ),
    [fullRowLength, pageSize, pageIndex]
  )
}

export default DataTablePagination
