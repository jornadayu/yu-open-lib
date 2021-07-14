import React from 'react'

import { Grid, Theme, makeStyles } from '@material-ui/core'

type Props = {
  value: number | string
  text: string
  marginTop?: number
}

type StyleProps = {
  marginTop: number
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    textAlign: 'center',
    marginTop: ({ marginTop }) => marginTop
  },
  value: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 38
  },
  label: {
    fontSize: 16
  }
}))

const InfoLabel: React.FC<Props> = ({ value, text, marginTop = 0 }) => {
  const classes = useStyles({ marginTop })

  return (
    <Grid container spacing={1} className={classes.root}>
      <Grid item xs={12}>
        <span className={classes.value}>{value}</span>
      </Grid>

      <Grid item xs={12}>
        <span className={classes.label}>{text}</span>
      </Grid>
    </Grid>
  )
}

export default InfoLabel
