import * as S from './styles';

interface FallbackProps {
  onRetry?: () => void;
}

export const FallbackError = ({ onRetry }: FallbackProps) => {
  return (
    <S.Wrapper>
      <S.Title>Ops! Algo deu errado.</S.Title>
      <S.Message>Infelizmente, ocorreu um problema inesperado.</S.Message>
      <p>Por favor, tente novamente.</p>
      <S.RetryButton onClick={onRetry || (() => window.location.reload())}>
        Tentar novamente
      </S.RetryButton>
    </S.Wrapper>
  );
};
