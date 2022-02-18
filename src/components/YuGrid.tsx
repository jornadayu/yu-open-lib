import React from 'react'

import { useTheme } from '@mui/material'
import Grid, { GridProps } from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

type Props = {
  children: React.ReactNode
  containerProps?: GridProps
  itemProps?: GridProps & { item?: true }
  centerText?: boolean
}

const YuGrid: React.FC<Props> = ({
  children,
  containerProps,
  itemProps,
  centerText = false
}) => {
  const theme = useTheme()

  return (
    <Grid
      container
      spacing={3}
      justifyContent='center'
      sx={{
        textAlign: centerText ? 'center' : 'initial'
      }}
      {...containerProps}
    >
      <Grid item xs={12} {...itemProps}>
        <Paper
          elevation={3}
          sx={{
            p: 2,
            background: theme.palette.background.default,
            height: '100%'
          }}
        >
          {children}
        </Paper>
      </Grid>
    </Grid>
  )
}

export default YuGrid
