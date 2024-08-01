import React, { PropsWithChildren } from 'react';
import * as S from './styles';

type FlexProps = PropsWithChildren<S.FlexProps>;

export const Flex: React.FC<FlexProps> = ({ children, gap, ...rest }) => {
  return (
    <S.Container gap={gap} {...rest}>
      {children}
    </S.Container>
  );
};
