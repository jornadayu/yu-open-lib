import React from 'react'

import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'

export type Props = {
  children: React.ReactElement
}

/**
 * Hides children node when scrolling down, appears again when scrolling up
 *
 * Children node always starts as visible when first mounted
 */
const HideOnScroll: React.FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

export default HideOnScroll
