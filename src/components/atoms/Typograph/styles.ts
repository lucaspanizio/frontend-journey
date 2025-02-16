import styled from 'styled-components'
import { Color } from '../../../types/color'

export const typographySizes = {
  h1: '2rem',
  h2: '1.5rem',
  h3: '1.25rem',
  h4: '1.125rem',
  h5: '1rem',
  h6: '0.875rem',
  p: '1rem',
  span: '1rem',
  small: '0.875rem',
} as const

export interface TypographProps {
  variant?: keyof typeof typographySizes
  color?: Color
}

export const Typography = styled.span.withConfig({
  // Note que não há problema em passar color para a DOM, pois essa prop existe nos elementos HTML
  shouldForwardProp: (prop) => prop !== 'variant',
})<TypographProps>`
  font-size: ${({ variant = 'p' }) => typographySizes[variant]};
  color: ${({ theme, color }) => color || theme.colors.text.light};
  line-height: 1.5;
`
