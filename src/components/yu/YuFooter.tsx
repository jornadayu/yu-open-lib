import React from 'react'

import { Instagram, LinkedIn } from '@mui/icons-material'
import { Button, IconButton, Link, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

import Logo from '../../assets/images/logo_black_bg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    zIndex: theme.zIndex.tooltip + 1,
    background: theme.palette.common.black,
    padding: '4rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '85%',
    maxWidth: '1120px',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    height: '6rem',
    marginBottom: '1.5rem'
  },
  filledText: {
    WebkitTextFillColor: theme.palette.getContrastText(
      theme.palette.common.white
    ),
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: theme.palette.getContrastText(
      theme.palette.common.black
    )
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '11rem',
    width: '65%',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    }
  },
  contentHeader: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      padding: '2rem 0'
    }
  },
  contentBottom: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginTop: 'auto'
  },
  social: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    paddingBottom: '0.5rem',
    borderBottom: '2px solid rgba(256, 256, 256, 0.1)',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  },
  mediaIconsContainer: {
    marginLeft: 'auto',
    marginRight: '-0.75rem',
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  },
  location: {
    paddingTop: '1.25rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('md')]: {
      alignItems: 'center'
    }
  },
  navItem: {
    fontSize: '0.8rem',
    fontWeight: 700,
    marginRight: '2vw',
    transition: 'opacity 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: 'white',
    textAlign: 'center',
    '&:hover': {
      opacity: 0.5
    },
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginBottom: '0.5rem',
      marginRight: 0
    }
  },
  button: {
    borderRadius: 0,
    fontWeight: 700,
    fontSize: '0.6rem',
    marginLeft: '0.75rem',
    padding: '0.45rem'
  },
  accessContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    [theme.breakpoints.down('md')]: {
      marginTop: '1.5rem',
      marginLeft: 0
    }
  }
}))

export type Props = {
  /** @default 'parceria@jornadayu.com' */
  email?: string
  /** @default 'https://jornadayu.com' */
  yuHome?: string
  /** @default 'https://linkedin.com/company/jornadayu' */
  linkedinUrl?: string
  /** @default 'https://clientes.jornadayu.com' */
  clientsUrl?: string
  /** @default 'https://instagram.com/jornadayu' */
  instagramUrl?: string
  /** @default 'Rua Ferreira de Araújo, 221 Cj. 122 Alto de Pinheiros, São Paulo' */
  address?: string
  /** @default '/'' */
  root?: string
  /** @default 'https://jobs.jornadayu.com' */
  candidatesUrl?: string
  imageSrc?: string
}

const Footer: React.FC<Props> = ({
  root = '/',
  email = 'parceria@jornadayu.com',
  yuHome = 'https://jornadayu.com',
  linkedinUrl = 'https://linkedin.com/company/jornadayu',
  instagramUrl = 'https://instagram.com/jornadayu',
  clientsUrl = 'https://clientes.jornadayu.com',
  candidatesUrl = 'https://jobs.jornadayu.com',
  address = 'Rua Ferreira de Araújo, 221 Cj. 122 Alto de Pinheiros, São Paulo',
  imageSrc = Logo
}) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.logoContainer}>
          <img src={imageSrc} alt='logo yu' className={classes.logo} />
          <Typography
            variant='h3'
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.75rem',
              textAlign: 'center'
            }}
          >
            SELEÇÃO
            <br />
            <span className={classes.filledText}>É/E</span> DESENVOLVIMENTO
          </Typography>
        </div>
        <div className={classes.content}>
          <div className={classes.contentHeader}>
            <Link className={classes.navItem} href={root}>
              Início
            </Link>

            <a
              className={classes.navItem}
              href={yuHome}
              target='_blank'
              rel='noreferrer'
            >
              Conheça Mais Sobre a YU
            </a>
            <div className={classes.accessContainer}>
              <Typography>Acesso:</Typography>
              <Button
                variant='outlined'
                color='inherit'
                className={classes.button}
                href={clientsUrl}
              >
                Cliente
              </Button>
              <Button
                variant='outlined'
                color='inherit'
                className={classes.button}
                href={candidatesUrl}
              >
                Candidato
              </Button>
            </div>
          </div>
          <div className={classes.contentBottom}>
            <div className={classes.social}>
              <Typography variant='h3' className={classes.filledText}>
                CONTATO:
              </Typography>
              <Link
                href={`mailto:${email}`}
                target='_blank'
                rel='noreferrer'
                sx={{
                  textDecoration: 'none',
                  color: 'common.white',
                  marginTop: 0.2,
                  ml: {
                    sx: 0,
                    md: 0.2
                  }
                }}
              >
                <Typography
                  variant='body1'
                  style={{ marginLeft: '0.5rem', textDecoration: 'none' }}
                >
                  {email}
                </Typography>
              </Link>
              <div className={classes.mediaIconsContainer}>
                <IconButton
                  component='a'
                  href={instagramUrl}
                  target='_blank'
                  size='large'
                >
                  <Instagram color='action' />
                </IconButton>

                <IconButton
                  component='a'
                  href={linkedinUrl}
                  target='_blank'
                  size='large'
                >
                  <LinkedIn color='action' />
                </IconButton>
              </div>
            </div>
            <div className={classes.location}>
              <Typography
                style={{
                  fontSize: '0.8rem',
                  margin: 0,
                  color: 'green',
                  textAlign: 'center',
                  textTransform: 'none'
                }}
              >
                Quando saímos do online, ficamos em Pinheiros, aqui em São
                Paulo. Mas nosso time é espalhado por todo o país.
              </Typography>
              <Typography
                style={{
                  fontSize: '0.8rem',
                  margin: 0,
                  textAlign: 'center',
                  textTransform: 'none',
                  marginTop: '0.5rem'
                }}
              >
                {address}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
