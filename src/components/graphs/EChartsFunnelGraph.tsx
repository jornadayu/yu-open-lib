import React, { useMemo } from 'react'

import { EChartOption } from 'echarts'
// @ts-ignore
import ReactEChartsCore from 'echarts-for-react/lib/core'
import { FunnelChart } from 'echarts/charts'
import {
  GridComponent,
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
  SVGRenderer
])

export type Datum = {
  id: string
  label: string
  value: number
}

export type Props = {
  data: Datum[]
  colors: string[]
}

const EChartsFunnelGraph: React.FC<Props> = ({ data, colors }) => {
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

  const option: EChartOption = {
    title: {
      show: false
    },
    legend: {
      show: false
    },
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        const item = mappedData.find((d) => d.name === params.name)

        return `${item?.label}: <strong>${item?.value}<strong>`
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
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {}
      }
    },
    color: mappedColors,
    series: [
      {
        name: 'Outside Funnel',
        type: 'funnel',
        top: '0',
        left: '0%',
        width: '80%',
        height: '100%',
        maxSize: '100%',
        label: {
          formatter: '{b}',
          fontFamily: theme.typography.fontFamily,
          color: theme.palette.getContrastText(theme.palette.background.paper)
        },
        labelLine: {
          show: true
        },
        itemStyle: {
          opacity: 0.7
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
        type: 'funnel',
        top: '0',
        left: '0%',
        width: '80%',
        height: '100%',
        maxSize: '100%',
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
    ]
  }

  return (
    <ReactEChartsCore
      echarts={echarts}
      option={option}
      theme={echartsTheme}
      notMerge
      lazyUpdate
    />
  )
}

export default EChartsFunnelGraph
