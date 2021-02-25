import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import MenuIcon from '@material-ui/icons/Menu'

import YuMobileNavBar from './YuMobileNavBar'
import YuDrawer from './YuDrawer'
import YuriLogo from '/../../assets/images/yuri/yuri_white.png'
import YuLogo from '/../../assets/images/yu/YU_Neg_02_Laranja.png'
import YuPositiveLogo from '/../../assets/images/yu/YU_Pos_02_Laranja.png'
import { useStyles } from './NavBarStyles'
import { NavbarItem } from '../../types'

export type Props = {
  items: {
    leftItems: NavbarItem[]
    rightItems: NavbarItem[]
    drawerItems: NavbarItem[]
  }

  /**
   * Background color of the NavBar
   * @default '#434242'
   */
  backgroundColor?: string

  /**
   * If the User is logged in or not (shows no items if logged out)
   * @default false
   */
  loggedIn?: boolean

  /**
   * If a People Search bar should be on the NavBar or not
   * @default false
   */
  searchBar?: boolean

  /**
   * Home URL of Yu Logo when not authenticated
   * @default 'https://jornadayu.com'
   */
  homeURL?: string

  /**
   * Whether to have a Drawer or not
   * @default true
   */
  drawer?: boolean

  /**
   * @default 'yuri'
   */
  logo?: 'yuri' | 'yu'

  /**
   * @default false
   */
  centerLogo?: boolean

  /**
   * @default false
   */
  centerMobileLogo?: boolean
}

const BaseAppBar: React.FC<Props> = ({
  items,
  children,
  backgroundColor = '#434242',
  loggedIn = false,
  homeURL = 'https://jornadayu.com',
  drawer = true,
  logo = 'yuri',
  centerLogo = false,
  centerMobileLogo = false
}) => {
  const classes = useStyles({ backgroundColor })
  const [leftDrawer, setLeftDrawer] = useState(false)

  const toggleLeftDrawer = () => {
    setLeftDrawer((state) => !state)
  }

  const { leftItems, rightItems } = items

  const navbarLogo =
    logo === 'yuri' ? (
      <img src={YuriLogo} width='32' />
    ) : (
      <img src={YuLogo} width='64' />
    )

  const drawerLogo =
    logo === 'yuri' ? (
      <img src={YuriLogo} width='32' />
    ) : (
      <img src={YuPositiveLogo} width='64' />
    )

  if (!loggedIn)
    return (
      <AppBar className={`${classes.appBar} ${classes.externalAppBar}`}>
        <Toolbar className={`${classes.toolBar}`}>
          <Typography variant='h2' className={classes.title}>
            <IconButton
              className={classes.logoYuri}
              color='inherit'
              href={homeURL}
            >
              {navbarLogo}
            </IconButton>
          </Typography>
        </Toolbar>

        <div className='gradient-line' />
      </AppBar>
    )

  return (
    <React.Fragment>
      {drawer && (
        <YuDrawer
          logo={drawerLogo}
          items={items}
          open={leftDrawer}
          handleClose={toggleLeftDrawer}
        />
      )}

      <YuMobileNavBar
        centerLogo={centerMobileLogo}
        backgroundColor={backgroundColor}
        logo={navbarLogo}
        drawer={
          drawer &&
          !!(
            items.leftItems.length ||
            items.rightItems.length ||
            items.drawerItems.length
          )
        }
        toggleLeftDrawer={toggleLeftDrawer}
      />

      <Hidden smDown>
        <AppBar
          className={
            centerLogo
              ? `${classes.appBar} ${classes.externalAppBar}`
              : classes.appBar
          }
        >
          <Toolbar className={classes.toolBar}>
            <Typography variant='h2' className={classes.title}>
              {drawer && !!items.drawerItems?.length && (
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

              <IconButton className={classes.logoYuri} color='inherit' href='/'>
                {navbarLogo}
              </IconButton>

              {leftItems.map((button) => (
                <Button
                  key={button.path}
                  className={classes.toolbarButton}
                  size='large'
                  color='inherit'
                  href={button.path}
                  startIcon={button.icon}
                  onClick={button.onClick}
                  {...button}
                >
                  {button.text}
                </Button>
              ))}
            </Typography>

            {children}

            {rightItems.map((button) => (
              <Button
                key={button.path}
                className={classes.toolbarButton}
                size='large'
                color='inherit'
                href={button.path}
                startIcon={button.icon}
                onClick={button.onClick}
                {...button}
              >
                {button.text}
              </Button>
            ))}
          </Toolbar>

          <div className='gradient-line' />
        </AppBar>
      </Hidden>
    </React.Fragment>
  )
}

export default BaseAppBar
