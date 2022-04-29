import React, { useMemo } from 'react'

import { Property } from 'csstype'

import { Chip, Theme, Tooltip } from '@mui/material'
import { ResponsiveStyleValue, SxProps, SystemStyleObject } from '@mui/system'

export type Props<Status extends string = string> = {
  value: Status
  label?: string
  errorValues?: Status[]
  successValues?: Status[]
  warningValues?: Status[]
  primaryValues?: Status[]
  /** Optional tooltip on chip hover */
  tooltip?: string
  sx?: SxProps<Theme>
}

const JobPositionStatusChip = <Status extends string = string>({
  value,
  label,
  errorValues,
  successValues,
  warningValues,
  primaryValues,
  tooltip,
  sx
}: Props<Status>): React.ReactElement => {
  const chipColor = useMemo<
    | SystemStyleObject<Theme>
    | ResponsiveStyleValue<
        Property.BackgroundColor | Property.BackgroundColor[]
      >
  >(() => {
    if (errorValues && errorValues.includes(value)) {
      return 'error.main'
    } else if (successValues && successValues.includes(value)) {
      return 'success.main'
    } else if (warningValues && warningValues.includes(value)) {
      return 'warning.main'
    } else if (primaryValues && primaryValues.includes(value)) {
      return 'primary.main'
    }
    return 'primary.main'
  }, [])

  return (
    <Tooltip title={tooltip || false} open={tooltip ? undefined : false}>
      <Chip
        label={label || value}
        sx={{
          color: 'white',
          bgcolor: chipColor,
          ...sx
        }}
      />
    </Tooltip>
  )
}

export default JobPositionStatusChip
