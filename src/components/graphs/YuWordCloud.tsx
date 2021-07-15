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

export type Props = {
  words: Word[]

  options?: OptionsProp

  /** @default false */
  darkMode?: boolean
}

const YuWordCloud: React.FC<Props> = ({
  words,
  options = defaultOptions,
  darkMode = false
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

  return <ReactWordcloud options={wordcloudOptions} words={filteredWords} />
}

export default YuWordCloud
