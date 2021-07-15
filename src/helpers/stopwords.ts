import { Word } from 'react-wordcloud'

import defaultWords from '../data/stopwords/ptbr.json'

type WordList = Word[] | string[]

export function removeStopWords(tokens: Word[], stopwords?: string[]): Word[]
export function removeStopWords(
  tokens: string[],
  stopwords?: string[]
): string[]
export function removeStopWords(
  tokens: WordList,
  stopwords: string[] = defaultWords as string[]
): WordList {
  if (!tokens.length) return tokens

  if (typeof tokens[0] === 'string') {
    return (tokens as string[]).filter(
      (word) => !stopwords.includes(word.toLowerCase())
    )
  }

  return (tokens as Word[]).filter(
    (word) => !stopwords.includes(word.text.toLowerCase())
  )
}
