import React from 'react'

import { makeStyles } from '@material-ui/core'

type Props = {
  onClick: () => any
}

const useStyles = makeStyles(() => ({
  clickArea: {
    cursor: 'pointer'
  }
}))

const ClickableArea: React.FC<Props> = ({ onClick, children }) => {
  const classes = useStyles()

  const handleKeybind = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === 'space') onClick()
  }

  return (
    <span
      role='button'
      tabIndex={0}
      onClick={onClick}
      onKeyDown={handleKeybind}
      className={classes.clickArea}
    >
      {children}
    </span>
  )
}

export default ClickableArea
