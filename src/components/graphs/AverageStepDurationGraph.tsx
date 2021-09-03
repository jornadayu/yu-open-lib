import React, { useMemo } from 'react'

import { ResponsiveHeatMap, HeatMapCommonProps } from '@nivo/heatmap'

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
 * https://nivo.rocks/heatmap
 */
const AverageStepDurationGraph: React.FC<AverageStepDurationGraphProps> = ({
  steps,
  legend = 'Dias',
  ...heatMapProps
}) => {
  const keys = useMemo(() => steps.map(({ name }) => name), [steps])

  const data = useMemo(() => {
    const datum = {}

    steps.forEach((step) => {
      datum[step.name] = step.count
    })

    return [datum]
  }, [steps])

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
        tickRotation: -90,
        legend: '',
        legendOffset: 36
      }}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend,
        legendPosition: 'middle',
        legendOffset: -40
      }}
      cellOpacity={1}
      cellBorderColor={{ from: 'color', modifiers: [['darker', 0.4]] }}
      labelTextColor={{ from: 'theme', modifiers: [['darker', 1.8]] }}
      animate
      motionStiffness={80}
      motionDamping={9}
      hoverTarget='cell'
      cellHoverOthersOpacity={0.5}
      {...heatMapProps}
    />
  )
}

export default AverageStepDurationGraph
