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
import YuriLogo from 'images/yuri_white.png'
import YuLogo from 'images/YU_Neg_02_Laranja.png'
import YuPositiveLogo from 'images/YU_Pos_02_Laranja.png'
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

export type ButtonProps = {
  button: NavbarItem
  backgroundColor: string
}

const ToolbarButton: React.FC<ButtonProps> = ({ button, backgroundColor }) => {
  const classes = useStyles({ backgroundColor })

  let buttonElement: React.ReactElement | null = null

  if (button.iconButton) {
    buttonElement = (
      <IconButton
        className={classes.toolbarButton}
        size='medium'
        color='inherit'
        onClick={button.onClick}
        {...button}
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
                  backgroundColor={backgroundColor}
                  key={button.path || button.text}
                />
              ))}
            </Typography>

            {children}

            {rightItems.map((button) => (
              <ToolbarButton
                button={button}
                backgroundColor={backgroundColor}
                key={button.path || button.text}
              />
            ))}
          </Toolbar>

          <div className='gradient-line' />
        </AppBar>
      </Hidden>
    </React.Fragment>
  )
}

export default BaseAppBar
