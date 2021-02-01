import createPalette from '@material-ui/core/styles/createPalette'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

declare module '@material-ui/core/styles/createPalette' {
  interface ToolbarPaletteColorOptions {
    background?: string
  }

  interface ToolbarPaletteColor {
    background: string
  }

  interface PaletteOptions {
    success?: PaletteColorOptions
    warning?: PaletteColorOptions
    toolbar?: ToolbarPaletteColorOptions
  }

  interface Palette {
    success: PaletteColor
    warning: PaletteColor
    toolbar: ToolbarPaletteColor
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: ThemeStatus
  }

  interface ThemeStatus {
    success?: string
    error?: string
    warning?: string
  }

  interface ThemeOptions {
    status?: ThemeStatus
  }
}
