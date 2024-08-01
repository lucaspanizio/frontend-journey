import React from 'react';
import { Flex } from '../../atoms/Flex';
import * as S from './styles';

export const Form: React.FC = () => {
  return (
    <S.Form>
      <Flex marginTop={10}>
        <S.Input type="text" placeholder="Jhon Doe" />
        <S.Input type="text" placeholder="jhon.doe@email.com" />
      </Flex>

      <Flex>
        <S.Button type="button" variant="deny" size="md">
          Cancelar
        </S.Button>
        <S.Button type="button" variant="confirm" size="md">
          Confirmar
        </S.Button>
      </Flex>
    </S.Form>
  );
};
