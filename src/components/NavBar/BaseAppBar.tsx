import React, { useState } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Hidden from '@material-ui/core/Hidden'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'

import YuMobileNavBar from './YuMobileNavBar'
import YuDrawer from './YuDrawer'
import YuriLogo from '/../../assets/images/yuri_white.png'
import { useStyles } from './NavBarStyles'
import { NavbarItem } from '../../types'

export type Props = {
  items: {
    leftItems: NavbarItem[]
    rightItems: NavbarItem[]
    drawerItems: NavbarItem[]
  }

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
}

const BaseAppBar: React.FC<Props> = ({
  items,
  loggedIn = false,
  searchBar = false,
  homeURL = 'https://jornadayu.com'
}) => {
  const classes = useStyles()
  const [leftDrawer, setLeftDrawer] = useState(false)

  const toggleLeftDrawer = () => {
    setLeftDrawer((state) => !state)
  }

  const [peopleSearch, setPeopleSearch] = useState('')

  const { leftItems, rightItems } = items

  const handlePeopleSearchChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => setPeopleSearch(event.target.value)

  function searchPeople() {
    document.location.href = `/people?query=${peopleSearch}`
  }

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
              <img src={YuriLogo} width='32' />
            </IconButton>
          </Typography>
        </Toolbar>

        <div className='gradient-line' />
      </AppBar>
    )

  return (
    <React.Fragment>
      <YuDrawer
        items={items}
        open={leftDrawer}
        handleClose={toggleLeftDrawer}
      />

      <YuMobileNavBar toggleLeftDrawer={toggleLeftDrawer} />

      <Hidden smDown>
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

              <IconButton className={classes.logoYuri} color='inherit' href='/'>
                <img src={YuriLogo} width='32' />
              </IconButton>

              {leftItems.map((button) => (
                <Button
                  key={button.path}
                  className={classes.toolbarButton}
                  size='large'
                  color='inherit'
                  href={button.path}
                  startIcon={button.icon}
                >
                  {button.text}
                </Button>
              ))}
            </Typography>

            {searchBar && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  placeholder='Buscar pessoa'
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                  }}
                  inputProps={{ 'aria-label': 'search-people' }}
                  onChange={handlePeopleSearchChange}
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      event.preventDefault()
                      searchPeople()
                    }
                  }}
                />
              </div>
            )}

            {rightItems.map((button) => (
              <Button
                key={button.path}
                className={classes.toolbarButton}
                size='large'
                color='inherit'
                href={button.path}
                startIcon={button.icon}
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
