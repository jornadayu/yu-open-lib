import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import HideOnScroll from '../HideOnScroll'
import { useStyles } from './NavBarStyles'

type Props = {
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
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Typography>

            <IconButton className={classes.logoYuri} color='inherit' href='/'>
              {logo}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Hidden>
  )
}

export default YuMobileNavBar
