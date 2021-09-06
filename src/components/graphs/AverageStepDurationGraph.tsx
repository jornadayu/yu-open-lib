import React, { useMemo } from 'react'

import {
  ResponsiveHeatMap,
  HeatMapCommonProps,
  HeatMapDatum
} from '@nivo/heatmap'

import { useNivoTheme } from '../../hooks/nivo'

export type StepDuration = {
  name: string
  count: number
}

export type AverageStepDurationGraphProps = {
  steps: StepDuration[]
  /** @default 'Dias' */
  legend?: string
} & Partial<HeatMapCommonProps>

/**
 * ```tsx
 * > toHeatmapData([{ name: 'A', count: 14.3 }, { name: 'B', count: 13 }])
 * {
 *   data: { 'A': '14', 'B', '13' },
 *   keys: ['A', 'B']
 * }
 * ```
 */
export const toHeatmapData = (
  steps: StepDuration[]
): {
  data: HeatMapDatum[]
  keys: string[]
} => {
  const keys: string[] = []

  const stepsAsObject = steps.reduce(
    (object: HeatMapDatum, step: StepDuration, index: number) => {
      // Use different key for duplicate step names, so they
      // don't get overriden
      const key = step.name in object ? `${step.name} (${index})` : step.name

      keys.push(key)

      return {
        ...object,
        [key]: step.count.toFixed(0)
      }
    },
    {}
  )

  return {
    data: [stepsAsObject],
    keys
  }
}

/**
 * https://nivo.rocks/heatmap
 */
const AverageStepDurationGraph: React.FC<AverageStepDurationGraphProps> = ({
  steps,
  legend = 'Dias',
  ...heatMapProps
}) => {
  const { keys, data } = useMemo(() => toHeatmapData(steps), [steps])
  const nivoTheme = useNivoTheme()

  return (
    <ResponsiveHeatMap
      theme={nivoTheme}
      data={data}
      keys={keys}
      colors='reds'
      indexBy='name'
      margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
      forceSquare
      axisTop={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: -25,
        legend: '',
        legendOffset: 36
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: 'middle',
        legendOffset: -20,
        legend
      }}
      cellOpacity={1}
      cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.2]] }}
      motionStiffness={80}
      motionDamping={9}
      hoverTarget='cell'
      cellHoverOthersOpacity={0.5}
      animate
      {...heatMapProps}
    />
  )
}

export default AverageStepDurationGraph
