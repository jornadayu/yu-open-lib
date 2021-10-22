import React from 'react'

import { styled } from '@mui/material/styles'

import Grid, { GridTypeMap } from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const PREFIX = 'YuGrid'

const classes = {
  paper: `${PREFIX}-paper`
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`& .${classes.paper}`]: {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
    height: '100%'
  }
}))

type Props = {
  children: React.ReactNode
  containerProps?: GridTypeMap['props']
  itemProps?: GridTypeMap['props']
  centerText?: boolean
}

const YuGrid: React.FC<Props> = ({
  children,
  containerProps,
  itemProps,
  centerText = false
}) => {
  return (
    <StyledGrid
      container
      spacing={3}
      justifyContent='center'
      sx={{
        textAlign: centerText ? 'center' : 'initial'
      }}
      {...containerProps}
    >
      <Grid item xs={12} {...itemProps}>
        <Paper elevation={3} className={classes.paper}>
          {children}
        </Paper>
      </Grid>
    </StyledGrid>
  )
}

export default YuGrid
