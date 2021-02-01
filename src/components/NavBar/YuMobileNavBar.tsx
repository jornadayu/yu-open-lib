import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import HideOnScroll from '../HideOnScroll'
import { useStyles } from './NavBarStyles'

import YuriLogo from '/../../assets/images/yuri_white.png'

type Props = {
  toggleLeftDrawer: () => void
}

const YuMobileNavBar: React.FC<Props> = ({ toggleLeftDrawer }) => {
  const classes = useStyles()

  return (
    <Hidden mdUp>
      <HideOnScroll>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography variant='h2' className={classes.title}>
              <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={toggleLeftDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Typography>

            <IconButton className={classes.logoYuri} color='inherit' href='/'>
              <img src={YuriLogo} width='32' height='48' />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Hidden>
  )
}

export default YuMobileNavBar
