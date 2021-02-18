import React from 'react'
import { Link } from 'react-router-dom'

import { Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { CopyableInput, AppTheme, YuAppBar, WhatsappChip } from 'yu-lib'
import GroupIcon from '@material-ui/icons/Group'

import 'yu-lib/dist/index.css'

const theme = AppTheme({darkMode: false})

const App = () => {
  // const onConfirm = () => console.log('confirm')
  // const onCancel = () => console.log('cancel')
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
      { text: 'Vagas', path: '/jobs', icon: <GroupIcon /> },
      { text: 'Projetos', path: '/projects', icon: <GroupIcon /> },
      { text: 'Busca Avançada', path: '/advanced_search/index', icon: <GroupIcon /> }
    ],
    rightItems: []
  }

  // const items = {
  //   drawerItems: [],
  //   leftItems: [],
  //   rightItems: []
  // }


  return (
    <ThemeProvider theme={theme}>
      <YuAppBar backgroundColor="#070707" items={items} loggedIn />

      <div>
        <Typography variant="h2">Texto exemplo</Typography>
      </div>
      {/* <ConfirmDialog handleClose={onCancel} handleConfirm={onConfirm} title="Some title" open text="Some text" cancelText="Cancelar" confirmText="Confirmar"></ConfirmDialog> */}

      <CopyableInput text="url.com" label="Some URL" />

      <WhatsappChip onClick={() => {}} number="123456" message="Olá" />
    </ThemeProvider>
  )
}

export default App
