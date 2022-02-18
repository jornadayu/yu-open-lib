import React from 'react'

import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { alpha } from '@mui/system'

const StyledYuButton = styled(Button)<ButtonProps>(({ theme }) => {
  const baseColor =
    theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.common.black

  const contrastColor =
    theme.palette.mode === 'dark'
      ? theme.palette.common.black
      : theme.palette.common.white

  return {
    textTransform: 'initial',
    borderRadius: 0,
    '&.MuiButton-sizeLarge': {
      fontSize: 20
    },
    '&.MuiButton-sizeMedium': {
      fontSize: 16
    },
    '&.MuiButton-sizeSmall': {
      fontSize: 14
    },
    '&.MuiButton-contained': {
      color: `${contrastColor} !important`,
      backgroundColor: baseColor,
      '&:hover': {
        backgroundColor: `${alpha(baseColor, 0.9)} !important`
      }
    },
    '&.MuiButton-root': {
      borderColor: baseColor,
      color: baseColor,
      '&:hover': {
        backgroundColor: alpha(baseColor, 0.16)
      }
    }
  }
})

export type Props = ButtonProps

const YuButton: React.FC<Props> = ({ ...props }) => {
  return <StyledYuButton {...props} />
}

export default YuButton
