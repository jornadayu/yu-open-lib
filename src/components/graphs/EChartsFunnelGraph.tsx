import React, { useMemo } from 'react'

import { EChartOption } from 'echarts'
import { EChartsReactProps } from 'echarts-for-react'
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { FunnelChart } from 'echarts/charts'
import {
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent
} from 'echarts/components'
import * as echarts from 'echarts/core'
import { SVGRenderer } from 'echarts/renderers'

import { useTheme } from '@mui/material'

import { useEchartsTheme } from '../../hooks/echarts'

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  FunnelChart,
  SVGRenderer,
  LegendComponent
])

export type Datum = {
  id: string
  label: string
  value: number
}

export type SharedSeriesOptions = {
  type: string
  top: string
  left: string
  width: string
  height: string
  maxSize: string
}

export type Props = {
  data: Datum[]
  colors: string[]
  options?: Partial<EChartOption>
  /** @default false */
  withPercentage?: boolean
  /** @default false */
  withLegends?: boolean
  seriesOptions?: Partial<SharedSeriesOptions>
  legendOptions?: Partial<EChartOption.Legend>
} & Partial<EChartsReactProps>

function formatParamIsSingle(
  p: EChartOption.Tooltip.Format | EChartOption.Tooltip.Format[]
): p is EChartOption.Tooltip.Format {
  return 'name' in p
}

const EChartsFunnelGraph: React.FC<Props> = ({
  data,
  colors,
  options,
  seriesOptions,
  legendOptions,
  withLegends = false,
  ...echartProps
}) => {
  const mappedData = useMemo(
    () => data.filter((d) => d.value).map((d) => ({ ...d, name: d.label })),
    [data]
  )

  const smoothedData = useMemo(
    () =>
      mappedData
        .slice(0)
        .reverse()
        .map((d, i) => ({ ...d, name: d.label, value: i + 1 })),
    [mappedData]
  )

  const mappedColors = useMemo(() => colors, [colors])

  const echartsTheme = useEchartsTheme()
  const theme = useTheme()

  const asTooltip = (datum?: Datum): string => {
    if (!datum) return ''

    return `${datum?.label}: <strong>${datum?.value}<strong>`
  }

  const sharedSeriesOptions = {
    type: 'funnel',
    top: '0',
    left: '0%',
    width: '80%',
    height: '100%',
    maxSize: '100%',
    ...seriesOptions
  }

  const option: EChartOption = {
    title: {
      show: false
    },
    legend: withLegends
      ? {
          data: mappedData.map((d) => d.name),
          backgroundColor: theme.palette.background.default,
          padding: 8,
          borderRadius: theme.shape.borderRadius as number,
          textStyle: {
            fontFamily: theme.typography.fontFamily,
            color: theme.palette.getContrastText(theme.palette.background.paper)
          },
          ...legendOptions
        }
      : {
          show: false
        },
    tooltip: {
      trigger: 'item',
      formatter(params) {
        if (formatParamIsSingle(params)) {
          const item = mappedData.find((d) => d.name === params.name)

          return asTooltip(item)
        }

        const tooltip = params
          .map((datum) => {
            const item = mappedData.find((d) => d.name === datum.name)

            return asTooltip(item)
          })
          .join('<br/>')

        return tooltip
      },
      textStyle: {
        color: theme.palette.getContrastText(theme.palette.background.default)
      },
      borderWidth: 0,
      backgroundColor: theme.palette.background.default
    },
    grid: {
      top: -55
    },
    color: mappedColors,
    series: [
      {
        name: 'Outside Funnel',
        ...sharedSeriesOptions,
        label: {
          formatter: '{b}',
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.getContrastText(theme.palette.background.paper)
        },
        labelLine: {
          show: true
        },
        itemStyle: {
          opacity: 0.6
        },
        emphasis: {
          label: {
            position: 'inside',
            formatter: '{b}'
          }
        },
        data: smoothedData
      },
      {
        name: 'Inside Funnel',
        ...sharedSeriesOptions,
        label: {
          position: 'inside',
          formatter: '{c}',
          borderColor: theme.palette.getContrastText('#15414b'),
          borderRadius: 0,
          color: theme.palette.getContrastText('#15414b')
        },
        itemStyle: {
          opacity: 0.8
        },
        data: mappedData,
        z: 100
      }
    ],
    ...options
  }

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      theme={echartsTheme}
      notMerge
      lazyUpdate
      {...echartProps}
    />
  )
}

export default EChartsFunnelGraph
