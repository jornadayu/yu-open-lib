import React from 'react'

import Slide from '@mui/material/Slide'
import useScrollTrigger from '@mui/material/useScrollTrigger'

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
