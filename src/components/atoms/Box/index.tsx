import { ReactNode } from 'react';
import * as S from './styles';

interface IBoxProps extends S.BoxProps {
  children: ReactNode;
}

export const Box = ({ children, ...rest }: IBoxProps) => {
  return <S.Container {...rest}>{children}</S.Container>;
};
