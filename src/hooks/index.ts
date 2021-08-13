import { useState } from 'react'

import { useMediaQuery, useTheme } from '@material-ui/core'

/**
 * Viewport hook to use for mobile-specific features, using Material-UI viewport breakpoints
 */
export const useViewport = (): {
  isMobile: boolean
  isTablet: boolean
  isWide: boolean
} => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const isWide = useMediaQuery(theme.breakpoints.up('xl'))

  return { isMobile, isTablet, isWide }
}

/**
 * A `React.useState` wrapper for toggleable states (`boolean` only)
 *
 * Receives a default value and returns value and a callback to toggle that value
 */
export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue)

  const toggleValue = () => setValue(!value)

  return [value, toggleValue]
}
