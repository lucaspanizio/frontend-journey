import { CSSProperties, styled } from 'styled-components'
import { margin, MarginProps } from 'styled-system'

import { Color } from '@/types/color'

export interface CardProps extends MarginProps {
  gap?: CSSProperties['gap'] | number
  backgroundColor?: Color
}

export const Container = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#111827'};
  gap: ${({ gap }) => (typeof gap === 'number' ? `${gap}px` : gap || '0.5rem')};
  ${margin}
`

export const ContainerTitle = styled.div<CardProps>`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  gap: 0.8rem;
  ${margin}
`

export type TitleProps = {
  color?: Color
}

export const Title = styled.h1<TitleProps>`
  display: flex;
  flex-direction: column;
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.text.light)};

  font-size: 1rem;
  font-weight: bold;

  & > * {
    font-size: 1rem;
  }
`

export const SubTitle = styled.span`
  display: flex;
  font-size: 0.825rem;
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.text.light};
`
