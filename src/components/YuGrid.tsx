import React from 'react'

import Grid, { GridTypeMap } from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    background: theme.palette.background.default,
    height: '100%',
    textAlign: ({ centerText }: { centerText: Props['centerText'] }) =>
      centerText ? 'center' : 'initial'
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
  const classes = useStyles({ centerText })

  return (
    <Grid container spacing={3} justifyContent='center' {...containerProps}>
      <Grid item xs={12} {...itemProps}>
        <Paper elevation={3} className={classes.paper}>
          {children}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default YuGrid
