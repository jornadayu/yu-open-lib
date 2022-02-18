import React from 'react'

import { Chip } from '@nivo/tooltip'

import { asPercentage } from '../../helpers'
import { useNivoTheme } from '../../hooks/nivo'

export type BaseProps = {
  text: string
  value: string | number
  color: string
  /** @default false */
  isPercentage?: boolean
}

export type Props = BaseProps &
  (
    | {
        isPercentage?: never
      }
    | {
        value: number
        isPercentage?: true
      }
  )

/**
 * Replace a base nivo Tooltip with a custom Tooltip with color chip using
 * this component, like below:
 *
 * ```tsx
 * <ResponsiveBar
 *   data={data}
 *   tooltip={(input) => (
 *     <NivoTextTooltip
 *       text={(input.id as string)?.replace(/ *\([^)]*\)/, '')}
 *       value={input.value}
 *       color={input.color}
 *     >
 *       <br />
 *       Some extra info:
 *       {' '}
 *       <strong>{input.data.expected_count}</strong>
 *     </NivoTextTooltip>
 *   )}
 * />
 * ```
 */
const NivoTextTooltip: React.FC<Props> = ({
  text,
  value,
  color,
  children,
  isPercentage = false
}) => {
  const nivoTheme = useNivoTheme()

  return (
    <div style={nivoTheme.tooltip?.container}>
      <div style={nivoTheme.tooltip?.basic}>
        <Chip color={color} style={nivoTheme.tooltip?.chip} />

        <span style={{ marginLeft: 6 }}>
          {text}:{' '}
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
