import 'styled-components'
import { themeBase } from '@/global/themes'

declare module 'styled-components' {
  type ThemeType = typeof themeBase

  export interface DefaultTheme extends ThemeType {}
}
