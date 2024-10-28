import { useState } from 'react';
import { ModalError } from './Modal';
import * as S from './styles';

interface FallbackProps {
  error?: Error;
  onRetry?: () => void;
}

export const FallbackError = ({ error, onRetry }: FallbackProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);

  return (
    <S.Wrapper>
      <S.Title>Ops! Algo deu errado.</S.Title>
      <S.Message>Infelizmente, ocorreu um problema inesperado.</S.Message>
      <p>Por favor, tente novamente.</p>
      <S.RetryButton onClick={onRetry || (() => window.location.reload())}>
        Tentar novamente
      </S.RetryButton>

      {error && (
        <>
          <S.ToastWrapper onClick={openModal} />

          {isOpenModal && <ModalError error={error} closeModal={closeModal} />}
        </>
      )}
    </S.Wrapper>
  );
};
