import { CSSProperties } from 'styled-components'
import { theme } from '../global/theme'

type RecursiveKeyOf<T> = {
  [K in keyof T & string]: T[K] extends object ? `${K}` | `${K}.${RecursiveKeyOf<T[K]>}` : `${K}`
}[keyof T & string]

export type Color = RecursiveKeyOf<typeof theme.colors> | CSSProperties['color']
