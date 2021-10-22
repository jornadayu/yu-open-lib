import { Theme } from '@nivo/core'
import { LegendProps } from '@nivo/legends'

import { useTheme } from '@mui/material'

export const legendProps: LegendProps = {
  anchor: 'bottom',
  direction: 'row',
  justify: false,
  translateX: 0,
  translateY: 56,
  itemsSpacing: 20,
  itemWidth: 100,
  itemHeight: 18,
  itemDirection: 'left-to-right',
  itemOpacity: 1,
  symbolSize: 18,
  symbolShape: 'circle',
  effects: [
    {
      on: 'hover',
      style: {
        itemOpacity: 1
      }
    }
  ]
}

export const useNivoTheme = (base?: Theme): Theme => {
  const theme = useTheme()

  return {
    background: theme.palette.background.paper,
    textColor: theme.palette.text.primary,
    fontSize: base?.fontSize || 11,
    fontFamily: theme.typography.fontFamily,
    tooltip: {
      container: {
        background: theme.palette.background.default,
        color: theme.palette.getContrastText(theme.palette.background.default),
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px 9px'
      },
      basic: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center'
      },
      table: {},
      tableCell: {
        padding: '3px 5px'
      }
    },
    axis: {
      domain: {
        line: {
          stroke: '#777777',
          strokeWidth: 1
        }
      },
      ticks: {
        line: {
          stroke: '#737373',
          strokeWidth: 1
        }
      },
      legend: {
        text: {
          fontSize: 16,
          fontWeight: theme.typography.fontWeightBold,
          color: theme.palette.getContrastText(theme.palette.background.paper)
        }
      }
    },
    grid: {
      line: {
        stroke: theme.palette.background.paper,
        strokeWidth: 1
      }
    }
  }
}
