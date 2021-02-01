import React from 'react'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

type Props = {
  children: React.ReactChild
}

const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      <React.Fragment>{children}</React.Fragment>
    </Slide>
  )
}

export default HideOnScroll
