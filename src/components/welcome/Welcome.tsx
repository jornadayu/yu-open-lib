import React from 'react'
import { Typography } from '@mui/material'

export type Props = {
  name: string
}

const Welcome: React.FC<Props> = ({ name }) => {
  const greetings = [
    'Olá',
    'Oi',
    'Bonjour',
    'Hello',
    'Buongiorno',
    'Olá',
    'Buenos dias',
    'Olá',
    'Oi',
    'Oie',
    'Fala',
    'Vamos lá',
    'Ao trabalho'
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