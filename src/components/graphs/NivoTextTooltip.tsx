import React from 'react'

import { Chip } from '@nivo/tooltip'

import { useNivoTheme } from '../../hooks/nivo'
import { asPercentage } from '../../helpers'

type Props = {
  text: string
  value: string
  color: string
  isPercentage?: never
} | {
  text: string
  value: number
  color: string
  isPercentage?: true
}

const NivoTextTooltip: React.FC<Props> = ({
  text, value, color, children, isPercentage = false
}) => {
  const nivoTheme = useNivoTheme()

  return (
    <div style={nivoTheme.tooltip?.container}>
      <div style={nivoTheme.tooltip?.basic}>
        <Chip color={color} style={nivoTheme.tooltip?.chip} />

        <span style={{ marginLeft: 6 }}>
          {text}
          :
          {' '}
          <strong>
            {isPercentage ? asPercentage(value as number) : value}
          </strong>

          {children}
        </span>
      </div>
    </div>
  )
}

export default NivoTextTooltip
