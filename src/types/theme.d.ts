import { Theme } from '@mui/material/styles'

declare module '@mui/material/styles/createPalette' {
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

declare module '@mui/material/styles/createMuiTheme' {
  interface Theme {
    status: ThemeStatus
  }

  interface ThemeStatus {
    success?: string
    error?: string
    warning?: string
  }

  interface DeprecatedThemeOptions {
    status?: ThemeStatus
  }
}
