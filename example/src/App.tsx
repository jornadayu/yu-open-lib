import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, CssBaseline, Switch, FormGroup, FormControlLabel } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import GroupIcon from '@mui/icons-material/Group'

// @ts-ignore
import { YuToastProvider, CopyableInput, AppTheme, YuAppBar, WhatsappChip, useToggle } from 'yu-open-lib'
import 'yu-open-lib/dist/index.css'

import ToastTests from './ToastTests'



const App = () => {
  const [darkMode, toggleDarkMode] = useToggle(true)
  const theme = AppTheme({ darkMode: darkMode })
  const items = {
    drawerItems: [
      { text: 'Marcas', path: '/brands', icon: <GroupIcon /> },
      { text: 'Usuários', component: Link, to: '/users', icon: <GroupIcon /> },
      {
        text: 'Some Things',
        path: '/some_things',
        icon: <GroupIcon />
      },
      {
        text: 'Stuff',
        path: '/stuff',
        icon: <GroupIcon />
      },
      {
        text: 'Other Stuff',
        path: '/other_stuff',
        icon: <GroupIcon />
      }
    ],
    leftItems: [
      { text: 'Vagas', path: '/jobs', icon: <GroupIcon />, iconButton: true },
      {
        text: 'Projetos',
        path: '/projects',
        icon: <GroupIcon />,
        iconButton: true,
        tooltip: 'Projetos'
      },
      {
        text: 'Search',
        path: '/search',
        icon: <GroupIcon />
      }
    ],
    rightItems: []
  }

  return (
    <StyledEngineProvider injectFirst>
      <EmotionThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <YuToastProvider>
            <YuAppBar backgroundColor="#070707" items={items} loggedIn logo="yu" searchBar={false} />

            <div style={{ marginTop: 100 }}>
              <Typography variant="h2">Texto exemplo</Typography>
            </div>

            <CopyableInput text="url.com" label="Some URL" />

            <ToastTests />

            <WhatsappChip onClick={() => {}} number="123456" message="Olá" />

            <FormGroup>
              <FormControlLabel control={<Switch checked={darkMode} onChange={toggleDarkMode} />} label="Dark Mode" />
            </FormGroup>
          </YuToastProvider>
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
}

export default App
