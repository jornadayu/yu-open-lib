import React from 'react'

import { line } from 'd3-shape'
import { useTheme } from '@material-ui/core'
import { BarDatum, BarCustomLayerProps } from '@nivo/bar'

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
}

/**
 * https://github.com/plouc/nivo/issues/141
 */
const BarGraphLine: React.FC<
  Props & Partial<BarCustomLayerProps<BarDatum>>
> = ({
  bars,
  yScale,
  minValue,
  maxValue,
  sameValueLabel,
  maxValueLabel,
  minValueLabel,
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
      .y(() => yScale(maxValue))
  }

  let lineGeneratorMin = null
  if (minValue && minValue > 0) {
    lineGeneratorMin = line()
      .x((d: any) => d.data.index * localInfinity)
      .y(() => yScale(minValue))
  }

  // Label positions have to depend on the line (maxValue / Min).
  // The constants to multiply were randomly guessed, but seem to behave
  // approximately correct.
  const positionConstantForUpperLabel = 68
  const positionConstantForBottomLabel = 76
  const middleBound = maxValue / 1.2

  const endTargetLabelPosition =
    (1 - maxValue / maxValue) *
    (maxValue > middleBound
      ? positionConstantForUpperLabel
      : positionConstantForBottomLabel)

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
      (minValue > middleBound
        ? positionConstantForUpperLabel
        : positionConstantForBottomLabel)
  }

  const labelColor = theme.palette.getContrastText(
    theme.palette.background.paper
  )

  return (
    <>
      {maxValue && lineGeneratorMax && (
        <>
          <path
            d={lineGeneratorMax(bars) as string}
            strokeDasharray='5, 5'
            stroke={color}
          />
          <text fill={labelColor} x='10' y={`${endTargetLabelPosition}%`}>
            {endTargetLabelText}
          </text>
        </>
      )}
      {minValue && lineGeneratorMin && (
        <>
          <path
            d={lineGeneratorMin(bars) as string}
            strokeDasharray='5, 5'
            stroke={color}
          />
          <text fill={labelColor} x='10' y={`${beginningTargetLabelPosition}%`}>
            {beginningTargetLabelText}
          </text>
        </>
      )}
    </>
  )
}

export default BarGraphLine
