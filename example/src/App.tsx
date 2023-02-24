import { Link } from 'react-router-dom'

import { Typography, CssBaseline, Switch, FormGroup, FormControlLabel } from '@mui/material'
import { Box } from '@mui/system'
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
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

            <WhatsappChip onClick={() => { }} number="123456" message="Olá" />

            <FormGroup>
              <FormControlLabel control={<Switch checked={darkMode} onChange={toggleDarkMode} />} label="Dark Mode" />
            </FormGroup>

            <Box sx={{ width: '100%', maxWidth: 500 }}>
              <Typography variant="h1" component="div" gutterBottom>
                h1. Heading
              </Typography>
              <Typography variant="h2" gutterBottom component="div">
                h2. Heading
              </Typography>
              <Typography variant="h3" gutterBottom component="div">
                h3. Heading
              </Typography>
              <Typography variant="h4" gutterBottom component="div">
                h4. Heading
              </Typography>
              <Typography variant="h5" gutterBottom component="div">
                h5. Heading
              </Typography>
              <Typography variant="h6" gutterBottom component="div">
                h6. Heading
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur
              </Typography>
              <Typography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
              <Typography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
              </Typography>
              <Typography variant="button" display="block" gutterBottom>
                button text
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                caption text
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                overline text
              </Typography>
            </Box>
          </YuToastProvider>
        </ThemeProvider>
      </EmotionThemeProvider>
    </StyledEngineProvider>
  );
}

export default App
