import { PropsWithChildren, ReactNode } from 'react';
import { Color } from '../../../types/color';
import { Flex } from '../../atoms/Flex';
import * as S from './styles';

interface ICardProps extends S.CardProps {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  color?: Color;
}

export const CommCard = ({
  icon,
  color,
  title,
  subtitle,
  children,
  ...rest
}: PropsWithChildren<ICardProps>) => {
  return (
    <S.Container {...rest}>
      <Flex alignItems="center">
        {icon}
        {title && <S.Title color={color}>{title}</S.Title>}
      </Flex>
      {subtitle && <S.SubTitle color={color}>{subtitle}</S.SubTitle>}
      {children}
    </S.Container>
  );
};
