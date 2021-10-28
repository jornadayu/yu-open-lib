import React from 'react'

import { line } from 'd3-shape'
import { useTheme } from '@mui/material'

export type Props = {
  minValue: number
  maxValue: number
  sameValueLabel: string
  maxValueLabel: string
  minValueLabel: string

  /** @default 68 */
  upperPosition?: number

  /** @default 76 */
  bottomPosition?: number

  /** @default 1.2 */
  boundModifier?: number

  /** default 'red' */
  color?: string

  /** Passed from `layers` callback from nivo's ResponsiveBar */
  bars?: any
  /** Passed from `layers` callback from nivo's ResponsiveBar */
  yScale?: any
}

/**
 * https://github.com/plouc/nivo/issues/141
 */
const BarGraphLine: React.FC<Props> = ({
  bars,
  yScale,
  minValue,
  maxValue,
  sameValueLabel,
  maxValueLabel,
  minValueLabel,
  upperPosition = 68,
  bottomPosition = 76,
  boundModifier = 1.2,
  color = 'red'
}) => {
  /* This number has to be big enough to ensure the line will cover the whole graph.
  However, using Number.MAX_NUMBER or Number.MAX_SAFE_INTEGER makes the line lose
  the dash property. */
  const localInfinity = 9999

  const theme = useTheme()

  let lineGeneratorMax = null
  if (maxValue && maxValue > 0) {
    lineGeneratorMax = line()
      .x((d: any) => d.data.index * localInfinity)
      // @ts-ignore
      .y(() => yScale(maxValue))
  }

  let lineGeneratorMin = null
  if (minValue && minValue > 0) {
    lineGeneratorMin = line()
      .x((d: any) => d.data.index * localInfinity)
      // @ts-ignore
      .y(() => yScale(minValue))
  }

  // Label positions have to depend on the line (maxValue / Min).
  // The constants to multiply were randomly guessed, but seem to behave
  // approximately correct.
  const middleBound = maxValue / boundModifier

  const endTargetLabelPosition =
    (1 - maxValue / maxValue) *
    (maxValue > middleBound ? upperPosition : bottomPosition)

  let beginningTargetLabelPosition = null

  let endTargetLabelText = ''
  let beginningTargetLabelText = ''

  if (maxValue === minValue) {
    endTargetLabelText = sameValueLabel
    beginningTargetLabelText = sameValueLabel

    beginningTargetLabelPosition = endTargetLabelPosition
  } else {
    endTargetLabelText = maxValueLabel
    beginningTargetLabelText = minValueLabel

    beginningTargetLabelPosition =
      (1 - minValue / maxValue) *
      (minValue > middleBound ? upperPosition : bottomPosition)
  }

  const labelColor = theme.palette.getContrastText(
    theme.palette.background.paper
  )

  return (
    <React.Fragment>
      {maxValue && lineGeneratorMax && (
        <React.Fragment>
          <path
            d={lineGeneratorMax(bars) as string}
            strokeDasharray='5, 5'
            stroke={color}
          />
          <text fill={labelColor} x='10' y={`${endTargetLabelPosition}%`}>
            {endTargetLabelText}
          </text>
        </React.Fragment>
      )}
      {minValue && lineGeneratorMin && (
        <React.Fragment>
          <path
            d={lineGeneratorMin(bars) as string}
            strokeDasharray='5, 5'
            stroke={color}
          />
          <text fill={labelColor} x='10' y={`${beginningTargetLabelPosition}%`}>
            {beginningTargetLabelText}
          </text>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}

export default BarGraphLine
