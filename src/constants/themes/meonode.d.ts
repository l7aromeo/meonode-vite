type ColorScale = {
  default: string
  content: string
  muted: string
  hover: string
}

type BaseColorScale = ColorScale & {
  medium: string
  deep: string
}

type ShadowScale = {
  default: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

type TextScale = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
  '5xl': string
  '6xl': string
}

type SpacingScale = {
  none: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
  '4xl': string
}

type RadiusScale = {
  none: string
  sm: string
  md: string
  lg: string
  xl: string
  full: string
}

export interface ThemeSystem {
  primary: ColorScale
  secondary: ColorScale
  accent: ColorScale
  neutral: ColorScale
  base: BaseColorScale
  success: ColorScale
  warning: ColorScale
  error: ColorScale
  danger: ColorScale
  info: ColorScale
  shadow: ShadowScale
  text: TextScale
  spacing: SpacingScale
  radius: RadiusScale
  navbarHeight: string
}

import '@meonode/ui'

declare module '@meonode/ui' {
  interface MeoTheme {
    mode: 'light' | 'dark'
    system: ThemeSystem
  }
}
