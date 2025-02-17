import 'styled-components'
import type { ThemeType } from '@/global/themes'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
