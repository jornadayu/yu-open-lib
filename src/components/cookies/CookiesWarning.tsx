import React from 'react'

import { Box, Button, Link, Snackbar, Typography, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import SalmaoIconNegative from '../../assets/icons/yu/negative/SalmaoIcon'
import SalmaoIconPositive from '../../assets/icons/yu/positive/SalmaoIcon'

const SnackbarStyled = styled(Snackbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10]
}))

const texts: {
  [key: string]: {
    primaryText: string
    secondaryText: string
    accept: string
    reject: string
  }
} = {
  pt: {
    primaryText:
      'Este site usa cookies para melhorar sua experiência de navegação. Ao continuar, você declara concordar com a nossa ',
    secondaryText: 'Política de Privacidade',
    accept: 'Aceitar',
    reject: 'Recusar'
  },
  es: {
    primaryText:
      'Este sitio usa cookies para mejorar su experiencia de navegación. Al continuar, usted declara estar de acuerdo con nuestra ',
    secondaryText: 'Política de Privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar'
  },
  en: {
    primaryText:
      'This site uses cookies to improve your browsing experience. By continuing, you declare that you agree with our ',
    secondaryText: 'Privacy Policy',
    accept: 'Accept',
    reject: 'Reject'
  }
}

export type Props = {
  url: string
  locale?: string
}

const CookiesWarning: React.FC<Props> = ({ url, locale }) => {
  const theme = useTheme()
  const [cookiesAcceptedDialogOpen, setCookiesAcceptedDialogOpen] =
    React.useState(true)

  React.useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted')
    if (cookiesAccepted) {
      setCookiesAcceptedDialogOpen(false)
    }
  }, [])

  const language = React.useMemo(() => {
    const language = locale || window.navigator.language
    if (language.includes('pt')) return 'pt'
    if (language.includes('es')) return 'es'
    return 'en'
  }, [locale])

  const handleCookiesAction = (accepted: boolean) => {
    localStorage.setItem('cookiesAccepted', accepted ? 'true' : 'false')
    setCookiesAcceptedDialogOpen(false)
  }

  return cookiesAcceptedDialogOpen ? (
    <SnackbarStyled
      open
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box p={2} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box>
            {theme.palette.mode === 'dark' ? (
              <SalmaoIconNegative />
            ) : (
              <SalmaoIconPositive />
            )}
          </Box>
          <Box>
            <Typography variant='body2'>
              {texts[language].primaryText}
              <Link
                href={url}
                target='_blank'
                sx={{ textDecoration: 'underline' }}
              >
                {texts[language].secondaryText}
              </Link>
              .
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            margin: '-10px 10px 10px 0'
          }}
        >
          <Button
            variant='outlined'
            color='error'
            onClick={() => handleCookiesAction(false)}
          >
            {texts[language].reject}
          </Button>
          <Button variant='outlined' onClick={() => handleCookiesAction(true)}>
            {texts[language].accept}
          </Button>
        </Box>
      </Box>
    </SnackbarStyled>
  ) : null
}

export default CookiesWarning
