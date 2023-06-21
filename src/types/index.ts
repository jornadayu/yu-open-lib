export type NavbarButtonProps = {
  text: string
  icon: React.ReactNode
  renderItem?: never
}

export type NavbarItemRenderProps = {
  text?: never
  icon?: never
  renderItem: () => React.ReactNode
}

export type NavbarItem = {
  /**
   * @default false
   */
  iconButton?: boolean
  tooltip?: string
  path?: string
  component?: React.ElementType
  to?: string
  onClick?: () => void
} & (NavbarButtonProps | NavbarItemRenderProps)

export type AppEnvironment = 'production' | 'development' | 'staging'
