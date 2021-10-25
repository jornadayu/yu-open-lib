import React from 'react'

import { styled } from '@mui/material/styles'

import Grid from '@mui/material/Grid'

const PREFIX = 'InfoLabel'

const classes = {
  root: `${PREFIX}-root`,
  value: `${PREFIX}-value`,
  label: `${PREFIX}-label`
}

const StyledGrid = styled(Grid)(({ theme }) => ({
  [`&.${classes.root}`]: {
    textAlign: 'center'
  },

  [`& .${classes.value}`]: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 38
  },

  [`& .${classes.label}`]: {
    fontSize: 16
  }
}))

export type Props = {
  value: number | string
  text: string
  marginTop?: number
}

const InfoLabel: React.FC<Props> = ({ value, text, marginTop = 0 }) => (
  <StyledGrid
    container
    spacing={1}
    className={classes.root}
    sx={{ marginTop: marginTop }}
  >
    <Grid item xs={12}>
      <span className={classes.value}>{value}</span>
    </Grid>

    <Grid item xs={12}>
      <span className={classes.label}>{text}</span>
    </Grid>
  </StyledGrid>
)

export default InfoLabel
