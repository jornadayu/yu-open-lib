import React, { createContext, useContext } from 'react'

import { DataTableProps } from './DataTable'

export type DataTableState = {
  groupingExpand: DataTableProps<any>['groupingExpand']
  showGroupingRowCount: DataTableProps<any>['showGroupingRowCount']
  allowManualGrouping: DataTableProps<any>['allowManualGrouping']
  showGroupingIndex: DataTableProps<any>['showGroupingIndex']
  highlightOnHover: DataTableProps<any>['highlightOnHover']
  children: React.ReactNode
}

const dataTableContext = createContext<Partial<DataTableState>>({})

export const useDataTable = () => useContext(dataTableContext)

export const DataTableProvider: React.FC<DataTableState> = ({
  children,
  ...stateProps
}) => {
  return (
    <dataTableContext.Provider value={stateProps}>
      {children}
    </dataTableContext.Provider>
  )
}
