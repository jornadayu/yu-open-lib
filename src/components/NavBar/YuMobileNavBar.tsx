import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Hidden from '@mui/material/Hidden'
import MenuIcon from '@mui/icons-material/Menu'

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
  const classes = useStyles({ backgroundColor })

  return (
    <Hidden mdUp>
      <HideOnScroll>
        <AppBar
          className={
            centerLogo
              ? `${classes.appBar} ${classes.externalAppBar}`
              : classes.appBar
          }
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
