export interface NavbarItem {
  text: string
  path: string
  icon: React.ReactNode
}

export type AppEnvironment = 'production' | 'development' | 'staging'
