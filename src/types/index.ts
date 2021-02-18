export interface NavbarItem {
  text: string
  path?: string
  icon: React.ReactNode
  component?: React.ElementType
  to?: string
  onClick?: () => void
}

export type AppEnvironment = 'production' | 'development' | 'staging'
