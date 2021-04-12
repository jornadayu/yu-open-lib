import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import GroupIcon from '@material-ui/icons/Group'

import { YuToastProvider, CopyableInput, AppTheme, YuAppBar, WhatsappChip } from 'yu-lib'
import 'yu-lib/dist/index.css'

import ToastTests from './ToastTests'

const theme = AppTheme({darkMode: false})

const App = () => {
  const items = {
    drawerItems: [
      { text: 'Marcas', path: '/brands', icon: <GroupIcon /> },
      { text: 'Usuários', component: Link, to: '/users', icon: <GroupIcon /> },
      { text: 'Alocação de Equipes', path: '/team_allocations', icon: <GroupIcon /> },
      {
        text: 'Emails de Sign-Off',
        path: '/people/people_with_automatic_signoff?filter_by_days=7',
        icon: <GroupIcon />
      },
      {
        text: 'Extensão LinkedIn',
        path: '/linkedin_extension',
        icon: <GroupIcon />
      }
    ],
    leftItems: [
      { text: 'Vagas', path: '/jobs', icon: <GroupIcon />, iconButton: true },
      { text: 'Projetos', path: '/projects', icon: <GroupIcon />, iconButton: true, tooltip: 'Projetos' },
      { text: 'Busca Avançada', path: '/advanced_search/index', icon: <GroupIcon /> }
    ],
    rightItems: []
  }

  return (
    <ThemeProvider theme={theme}>
      <YuToastProvider>
        <YuAppBar backgroundColor="#070707" items={items} loggedIn logo="yu" searchBar={false} />

        <div>
          <Typography variant="h2">Texto exemplo</Typography>
        </div>

        <CopyableInput text="url.com" label="Some URL" />

        <ToastTests />

        <WhatsappChip onClick={() => {}} number="123456" message="Olá" />
      </YuToastProvider>
    </ThemeProvider>
  )
}

export default App
