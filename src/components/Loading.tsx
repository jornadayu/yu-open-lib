import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
  loadingGrid: {
    textAlign: 'center'
  }
}))

type Props = {
  /** If the Loading Bar should be active or its children */
  loading: boolean
}

/**
 * Generic horizontal loading bars, mostly to be used as specific resources loading (e.g. small cards inside a bigger container)
 */
const LoadingBars: React.FC<Props> = ({ loading }) => {
  const classes = useStyles()

  return (
    (loading && (
      <Grid className={classes.loadingGrid}>
        <svg
          className='loader active'
          height='55px'
          id='Layer_1'
          version='1.1'
          viewBox='0 0 24 30'
          width='50px'
          x='0px'
          xmlSpace='preserve'
          xmlns='http://www.w3.org/2000/svg'
          xmlnsXlink='http://www.w3.org/1999/xlink'
          y='0px'
        >
          <rect fill='#333' height='10' opacity='0.2' width='4' x='0' y='10'>
            <animate
              attributeName='opacity'
              attributeType='XML'
              begin='0s'
              dur='0.6s'
              repeatCount='indefinite'
              values='0.2; 1; .2'
            />
            <animate
              attributeName='height'
              attributeType='XML'
              begin='0s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 20; 10'
            />
            <animate
              attributeName='y'
              attributeType='XML'
              begin='0s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 5; 10'
            />
          </rect>
          <rect fill='#333' height='10' opacity='0.2' width='4' x='8' y='10'>
            <animate
              attributeName='opacity'
              attributeType='XML'
              begin='0.15s'
              dur='0.6s'
              repeatCount='indefinite'
              values='0.2; 1; .2'
            />
            <animate
              attributeName='height'
              attributeType='XML'
              begin='0.15s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 20; 10'
            />
            <animate
              attributeName='y'
              attributeType='XML'
              begin='0.15s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 5; 10'
            />
          </rect>
          <rect fill='#333' height='10' opacity='0.2' width='4' x='16' y='10'>
            <animate
              attributeName='opacity'
              attributeType='XML'
              begin='0.3s'
              dur='0.6s'
              repeatCount='indefinite'
              values='0.2; 1; .2'
            />
            <animate
              attributeName='height'
              attributeType='XML'
              begin='0.3s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 20; 10'
            />
            <animate
              attributeName='y'
              attributeType='XML'
              begin='0.3s'
              dur='0.6s'
              repeatCount='indefinite'
              values='10; 5; 10'
            />
          </rect>
        </svg>
      </Grid>
    )) ||
    null
  )
}

export default LoadingBars
