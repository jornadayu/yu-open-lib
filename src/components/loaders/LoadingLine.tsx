import React from 'react'

import { Fade, Grid, LinearProgress, useTheme } from '@mui/material'

export type Props = {
  /** @default false */
  active?: boolean
  style?: React.CSSProperties
  /**
   * Show loading line on bottom on mobile, if `true`
   * Useful for pages with a bottom navigation bar
   * @default true
   */
  bottom?: boolean
  /** @default 35 */
  topY?: number
  /** @default 83 */
  mobileTopY?: number
  /** @default 40 */
  mobileBottomY?: number
}

/**
 * Full-width Loading bar below the Navbar, or above bottom bar on mobile if `bottom = true`
 *
 * ```tsx
 * const MyComponent: React.FC = () => {
 *   const { data, isLoading } = useQuery<...>(...)
 *
 *   return (
 *     <LoadingLine active={isLoading} />
 *   )
 * }
 * ```
 */
const LoadingLine: React.FC<Props> = ({
  active,
  bottom = true,
  style,
  topY = 35,
  mobileTopY = 83,
  mobileBottomY = 40
}) => {
  const theme = useTheme()

  return (
    <Grid
      sx={{
        paddingTop: 0,
        width: '120%',
        left: 0,
        position: 'fixed',
        top: topY,
        [theme.breakpoints.down('sm')]: {
          top: bottom ? 'initial' : mobileTopY,
          bottom: bottom ? mobileBottomY : 0
        }
      }}
      container
      spacing={1}
      style={style}
    >
      <Grid item xs={12} style={{ paddingTop: 0, marginBottom: 16 }}>
        <Fade in={active}>
          <LinearProgress style={{ height: 10 }} />
        </Fade>
      </Grid>
    </Grid>
  )
}

export default LoadingLine
