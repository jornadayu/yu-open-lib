import React, { useMemo } from 'react'

import { Property } from 'csstype'

import { Chip, ChipProps, Theme, Tooltip } from '@mui/material'
import { ResponsiveStyleValue, SystemStyleObject } from '@mui/system'

export type Props<Status extends string = string> = {
  value: Status
  errorValues?: Status[]
  successValues?: Status[]
  warningValues?: Status[]
  primaryValues?: Status[]
  /** Optional tooltip on chip hover */
  tooltip?: string
} & ChipProps

const StatusChip = <Status extends string = string>({
  value,
  label,
  errorValues,
  successValues,
  warningValues,
  primaryValues,
  tooltip,
  sx,
  ...chipProps
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
  }, [errorValues, primaryValues, successValues, value, warningValues])

  return (
    <Tooltip title={tooltip || false} open={tooltip ? undefined : false}>
      <Chip
        label={label || value}
        {...chipProps}
        sx={{
          color: 'white',
          bgcolor: chipColor,
          ...sx
        }}
      />
    </Tooltip>
  )
}

export default StatusChip
