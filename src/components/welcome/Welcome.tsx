import React from 'react'

import { Typography } from '@mui/material'

export type Props = {
  name?: string
  /**
   * @default ['Olá', 'Oi', 'Oie', 'Hello', 'Hola', 'Bonjour', 'Buongiorno', 'Buenos dias', 'Fala', 'Vamos lá', "Let's go", 'Vámonos', 'Have a nice day']
   */
  greetingList?: string[]
  /**
   * @default ['🦾🦾🦾', '😘', '🌈', '😜', '🤪', '🦾', '🙂']
   */
  emojiList?: string[]
  /**
   * If not greeting passed, a random one is chosen
   */
  greeting?: string
  /**
   * If not emoji passed, a random one is chosen
   */
  emoji?: string
}

const Welcome: React.FC<Props> = ({
  name,
  greeting,
  emoji,
  greetingList = [
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
    "Let's go",
    'Vámonos',
    'Have a nice day'
  ],
  emojiList = ['🦾🦾🦾', '😘', '🌈', '😜', '🤪', '🦾', '🙂']
}) => {
  const randomGreeting =
    greeting || greetingList[Math.floor(Math.random() * greetingList.length)]
  const randomEmoji =
    emoji || emojiList[Math.floor(Math.random() * emojiList.length)]

  return name ? (
    <Typography variant='h3'>
      {`${randomGreeting} ${randomEmoji}, ${name}!`}
    </Typography>
  ) : (
    <Typography variant='h3'>
      {`${randomGreeting}!!! ${randomEmoji}`}
    </Typography>
  )
}

export default Welcome
