declare type AppEnvironment = 'production' | 'development' | 'staging'

declare interface NavbarItem {
  text: string
  path: string
  icon: React.ReactNode
}
