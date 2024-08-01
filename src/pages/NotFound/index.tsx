import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UndoIcon } from 'lucide-react';
import { Flex } from '../../components/atoms/Flex';
import * as S from './styles';

export const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.ErrorCode>404</S.ErrorCode>
      <S.ErrorMessage>Página Não Encontrada</S.ErrorMessage>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <S.Button onClick={handleGoBack}>
        <Flex>
          <UndoIcon color="white" />
          Voltar
        </Flex>
      </S.Button>
    </S.Container>
  );
};
