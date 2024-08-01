import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { theme } from '../../../global/theme';
import { Flex } from '../../atoms/Flex';
import * as S from './styles';

interface ICardProps extends HTMLAttributes<HTMLDivElement>, S.CardProps {
  icon?: ReactNode;
  title?: string;
  subtitle?: string;
  color?: keyof typeof theme.colors;
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
      <Flex>
        {icon}
        {title && <S.Title color={color}>{title}</S.Title>}
      </Flex>
      {subtitle && <S.SubTitle color={color}>{subtitle}</S.SubTitle>}
      {children}
    </S.Container>
  );
};
