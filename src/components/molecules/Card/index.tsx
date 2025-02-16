import { PropsWithChildren } from 'react'
import { Color } from '@/types/color'
import * as S from './styles'

interface ICardProps extends S.CardProps {}

const Card = ({ children, ...rest }: PropsWithChildren<ICardProps>) => {
  return <S.Container {...rest}>{children}</S.Container>
}

interface ITitleProps extends S.TitleProps {}

const Title = ({ children, color = 'primary', ...rest }: PropsWithChildren<ITitleProps>) => {
  return (
    <S.ContainerTitle {...rest}>
      <S.Title color={color}>{children}</S.Title>
    </S.ContainerTitle>
  )
}

interface ISubtitleProps extends ICardProps {
  color?: Color
}

const Subtitle = ({ children, color, ...rest }: PropsWithChildren<ISubtitleProps>) => {
  return (
    <S.ContainerTitle {...rest}>
      <S.SubTitle color={color}>{children}</S.SubTitle>
    </S.ContainerTitle>
  )
}

Card.Title = Title
Card.Subtitle = Subtitle

export { Card }
