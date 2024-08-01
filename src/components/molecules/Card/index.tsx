import { HTMLAttributes, ReactNode } from 'react';
import { theme } from '../../../global/theme';
import * as S from './styles';

interface ICardProps extends HTMLAttributes<HTMLDivElement>, S.CardProps {}

const Card = ({ children, ...rest }: ICardProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};

interface ITitleProps extends ICardProps {
  children: ReactNode;
  color?: keyof typeof theme.colors;
}

const Title = ({ children, color, ...rest }: ITitleProps) => {
  return (
    <S.ContainerTitle {...rest}>
      <S.Title color={color}>{children}</S.Title>
    </S.ContainerTitle>
  );
};

interface ISubtitleProps extends ICardProps {
  children: ReactNode;
  color?: keyof typeof theme.colors;
}

const Subtitle = ({ children, color, ...rest }: ISubtitleProps) => {
  return (
    <S.ContainerTitle {...rest}>
      <S.SubTitle color={color}>{children}</S.SubTitle>
    </S.ContainerTitle>
  );
};

Card.Title = Title;
Card.Subtitle = Subtitle;

export { Card };
