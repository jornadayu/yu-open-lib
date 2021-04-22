export interface NavbarItem {
  text: string

  /**
   * @default false
   */
  iconButton?: boolean

  tooltip?: string
  path?: string
  icon: React.ReactNode
  component?: React.ElementType
  to?: string
  onClick?: () => void
}

export type AppEnvironment = 'production' | 'development' | 'staging'
