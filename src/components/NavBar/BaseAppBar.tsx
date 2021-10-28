import React, { useState } from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Hidden from '@mui/material/Hidden'
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'

import YuMobileNavBar from './YuMobileNavBar'
import YuDrawer from './YuDrawer'

import YuriNegativeWhiteIcon from '../../assets/icons/yuri/negative/WhiteIcon'
import YuriPositiveOrangeIcon from '../../assets/icons/yuri/positive/OrangeIcon'
import YuNegativeLaranjaIcon from '../../assets/icons/yu/negative/LaranjaIcon'
import YuPositiveLaranjaIcon from '../../assets/icons/yu/positive/VioletaIcon'

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
  logo?: 'yuri' | 'yu' | React.ReactElement
  /**
   * @default 'yuri'
   */
  positiveLogo?: 'yuri' | 'yu' | React.ReactElement
  /**
   * @default false
   */
  centerLogo?: boolean
  /**
   * @default false
   */
  centerMobileLogo?: boolean
}

export type ButtonProps = {
  button: NavbarItem
}

const ToolbarButton: React.FC<ButtonProps> = ({ button }) => {
  const classes = useStyles()

  let buttonElement: React.ReactElement | null = null

  const buttonProps = {
    onClick: button.onClick,
    to: button.to,
    component: button.component,
    path: button.path
  }

  if (button.iconButton) {
    buttonElement = (
      <IconButton
        className={classes.toolbarButton}
        size='medium'
        color='inherit'
        {...buttonProps}
      >
        {button.icon}
      </IconButton>
    )
  } else {
    buttonElement = (
      <Button
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
    )
  }

  if (button.tooltip) {
    return <Tooltip title={button.tooltip}>{buttonElement}</Tooltip>
  }

  return buttonElement
}

const BaseAppBar: React.FC<Props> = ({
  items,
  children,
  backgroundColor = '#434242',
  loggedIn = false,
  homeURL = 'https://jornadayu.com',
  drawer = true,
  logo = 'yuri',
  positiveLogo,
  centerLogo = false,
  centerMobileLogo = false
}) => {
  const classes = useStyles()
  const [leftDrawer, setLeftDrawer] = useState(false)

  const toggleLeftDrawer = () => {
    setLeftDrawer((state) => !state)
  }

  const { leftItems, rightItems } = items

  let navbarLogo = <YuNegativeLaranjaIcon />

  if (logo === 'yuri') {
    navbarLogo = <YuriNegativeWhiteIcon />
  } else if (logo === 'yu') {
    navbarLogo = <YuNegativeLaranjaIcon />
  } else {
    // Use custom logo passed
    navbarLogo = logo as React.ReactElement
  }

  let drawerLogo = <YuPositiveLaranjaIcon />

  // Use same logo as 'logo', but positive (if available) if none was passed
  const actualPositiveLogo = positiveLogo || logo

  if (actualPositiveLogo === 'yuri') {
    drawerLogo = <YuriPositiveOrangeIcon />
  } else if (actualPositiveLogo === 'yu') {
    drawerLogo = <YuPositiveLaranjaIcon />
  } else {
    // Use custom logo passed
    drawerLogo = actualPositiveLogo as React.ReactElement
  }

  if (!loggedIn)
    return (
      <AppBar
        className={classes.externalAppBar}
        sx={{ backgroundColor: backgroundColor }}
      >
        <Toolbar className={`${classes.toolBar}`}>
          <Typography variant='h2' className={classes.title}>
            <IconButton
              className={classes.logoYuri}
              color='inherit'
              href={homeURL}
              size='large'
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

      <Hidden mdDown>
        <AppBar
          className={centerLogo ? classes.externalAppBar : undefined}
          sx={{ backgroundColor: backgroundColor }}
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
                  size='large'
                >
                  <MenuIcon />
                </IconButton>
              )}

              <IconButton
                className={classes.logoYuri}
                color='inherit'
                href='/'
                size='large'
              >
                {navbarLogo}
              </IconButton>

              {leftItems.map((button) => (
                <ToolbarButton
                  button={button}
                  key={button.path || button.text}
                />
              ))}
            </Typography>

            {children}

            {rightItems.map((button) => (
              <ToolbarButton button={button} key={button.path || button.text} />
            ))}
          </Toolbar>

          <div className='gradient-line' />
        </AppBar>
      </Hidden>
    </React.Fragment>
  )
}

export default BaseAppBar
