import React from 'react'
import { Typography } from '@mui/material'

export type Props = {
  name: string
}

const Welcome: React.FC<Props> = ({ name }) => {
  const greetings = [
    'Olá',
    'Oi',
    'Oie',
    'Hello',
    'Hola',
    'Bonjour',
    'Buongiorno',
    'Buenos dias',
    'Fala',
    'Vamos lá',
    'Let\'s go',
    'Vámonos',
    'Have a nice day'
  ]
  const emojis = ['🦾🦾🦾', '😘', '🌈', '😜', '🤪', '🦾', '🙂']

  return (
    <Typography variant="h3">
      {`${greetings[Math.floor(Math.random() * greetings.length)]} ${
        emojis[Math.floor(Math.random() * emojis.length)]
      }, ${name}!`}
    </Typography>
  )
}

export default Welcome