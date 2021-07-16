import React, { useMemo } from 'react'

import ReactWordcloud, { OptionsProp, Word } from 'react-wordcloud'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/themes/light.css'

import { removeStopWords } from '../../helpers/stopwords'

const defaultOptions: OptionsProp = {
  enableTooltip: true,
  deterministic: true,
  fontFamily: 'DM Sans, sans-serif',
  fontSizes: [10, 45],
  fontStyle: 'normal',
  fontWeight: 'normal',
  padding: 0.5,
  rotations: 3,
  rotationAngles: [0, 0],
  scale: 'log',
  spiral: 'archimedean',
  transitionDuration: 500,
  tooltipOptions: {
    theme: 'light'
  }
}

export type BaseProps = {
  words: Word[]
  options?: OptionsProp
  /** @default false */
  darkMode?: boolean
}

export type PercentageProps = {
  /** @default false */
  isPercentage: true
  /** @default 0 */
  precision?: number
}

export type NotPercentageProps = {
  /** @default false */
  isPercentage?: false
  /** @default 0 */
  precision: never
}

export type Props = BaseProps & (PercentageProps | NotPercentageProps)

const YuWordCloud: React.FC<Props> = ({
  words,
  options = defaultOptions,
  darkMode = false,
  isPercentage = false,
  precision = 0
}) => {
  const filteredWords = useMemo(() => removeStopWords(words), [words])

  // Use tooltip material theme when using dark mode
  // https://atomiks.github.io/tippyjs/v6/themes/
  const wordcloudOptions = {
    ...options,
    tooltipOptions: {
      ...options?.tooltipOptions,
      theme: darkMode ? 'material' : 'light'
    }
  }

  return (
    <ReactWordcloud
      callbacks={{
        getWordTooltip: isPercentage
          ? (word) => `${word.text}: ${(word.value * 100).toFixed(precision)}%`
          : (word) => `${word.text}: ${word.value}`
      }}
      options={wordcloudOptions}
      words={filteredWords}
    />
  )
}

export default YuWordCloud
