import React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import HideOnScroll from '../HideOnScroll'
import { useStyles } from './NavBarStyles'

export type Props = {
  toggleLeftDrawer: () => void
  /**
   * Whether to have a Drawer or not
   * @default true
   */
  drawer: boolean
  logo: React.ReactElement
  backgroundColor: string
  centerLogo: boolean
}

const YuMobileNavBar: React.FC<Props> = ({
  toggleLeftDrawer,
  drawer,
  logo,
  backgroundColor,
  centerLogo
}) => {
  const classes = useStyles()

  return (
    <Hidden mdUp>
      <HideOnScroll>
        <AppBar
          className={centerLogo ? classes.externalAppBar : undefined}
          sx={{ backgroundColor: backgroundColor }}
        >
          <Toolbar className={classes.toolBar}>
            <Typography variant='h2' className={classes.title}>
              {drawer && (
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  onClick={toggleLeftDrawer}
                  size='large'
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Typography>

            <IconButton
              className={classes.logoYuri}
              color='inherit'
              href='/'
              size='large'
            >
              {logo}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Hidden>
  )
}

export default YuMobileNavBar
