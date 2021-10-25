import React from 'react'
import { Link } from 'react-router-dom'

import { Typography, CssBaseline } from '@mui/material'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import GroupIcon from '@mui/icons-material/Group'

// @ts-ignore
import { YuToastProvider, CopyableInput, AppTheme, YuAppBar, WhatsappChip, YuNegativeLaranja } from 'yu-open-lib'
import 'yu-open-lib/dist/index.css'

import ToastTests from './ToastTests'

const theme = AppTheme({ darkMode: true })

const App = () => {
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <YuToastProvider>
          <YuAppBar backgroundColor="#070707" items={items} loggedIn logo="yu" searchBar={false} />

          <div style={{ marginTop: 100 }}>
            <img src={YuNegativeLaranja} alt="yu-negative-orange-logo" width="64" height="64" />

            <Typography variant="h2">Texto exemplo</Typography>
          </div>

          <CopyableInput text="url.com" label="Some URL" />

          <ToastTests />

          <WhatsappChip onClick={() => {}} number="123456" message="Olá" />
        </YuToastProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App
