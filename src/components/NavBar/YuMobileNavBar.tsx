import React from 'react'

import { Menu as MenuIcon } from '@mui/icons-material'
import {
  AppBar,
  Box,
  Hidden,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'

import { NavbarItem } from '../../types'
import HideOnScroll from '../HideOnScroll'
import { ToolbarButton } from './BaseAppBar'
import { useStyles } from './NavBarStyles'

export type Props = {
  toggleLeftDrawer: () => void
  /**
   * Whether to have a Drawer or not
   * @default true
   */
  drawer: boolean
  /**
   * Whether to have icons in the mobile header or not
   * @default false
   */
  withMobileIcons: boolean
  logo: React.ReactElement
  backgroundColor: string
  centerLogo: boolean
  items: {
    leftItems: NavbarItem[]
    rightItems: NavbarItem[]
    drawerItems: NavbarItem[]
  }
  mobileActionItem?: NavbarItem
}

const YuMobileNavBar: React.FC<Props> = ({
  toggleLeftDrawer,
  drawer,
  logo,
  backgroundColor,
  centerLogo,
  withMobileIcons,
  mobileActionItem,
  items
}) => {
  const classes = useStyles()
  const { leftItems, rightItems } = items

  return (
    <Hidden mdUp>
      <HideOnScroll>
        <AppBar
          className={centerLogo ? classes.externalAppBar : undefined}
          sx={{ backgroundColor: backgroundColor }}
        >
          <Toolbar
            className={`${classes.toolBar} ${
              !drawer && withMobileIcons ? classes.mobileNavBar : ''
            }`}
          >
            {drawer && (
              <Typography variant='h2' className={classes.title}>
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
              </Typography>
            )}
            {!!mobileActionItem && (
              <Box sx={{ mt: 1 }}>{mobileActionItem.icon}</Box>
            )}
            <IconButton
              className={classes.logoYuri}
              color='inherit'
              href='/'
              size='large'
            >
              {logo}
            </IconButton>

            {withMobileIcons && !drawer && (
              <Box>
                {leftItems.map((button) => (
                  <ToolbarButton
                    button={{ ...button, iconButton: true }}
                    key={button.path || button.text}
                  />
                ))}

                {rightItems.map((button) => (
                  <ToolbarButton
                    button={{ ...button, iconButton: true }}
                    key={button.path || button.text}
                  />
                ))}
              </Box>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Hidden>
  )
}

export default YuMobileNavBar
