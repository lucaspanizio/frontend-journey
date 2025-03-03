import { useState } from 'react'

import { Box } from '@/components/atoms/Box'

import { ModalError } from './Modal'
import * as S from './styles'

interface FallbackProps {
  error?: Error
  onRetry?: () => void
}

export const FallbackError = ({ error, onRetry }: FallbackProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => setIsOpenModal(true)
  const closeModal = () => setIsOpenModal(false)

  return (
    <Box>
      <S.Wrapper>
        <S.Title>Ops! Algo deu errado.</S.Title>
        <S.Message>Infelizmente, ocorreu um problema inesperado.</S.Message>
        <p>Por favor, tente novamente.</p>
        <S.RetryButton onClick={onRetry || (() => window.location.reload())}>Tentar novamente</S.RetryButton>

        {error && (
          <>
            {import.meta.env.MODE === 'development' && <S.ToastButton onClick={openModal} />}

            {isOpenModal && <ModalError error={error} closeModal={closeModal} />}
          </>
        )}
      </S.Wrapper>
    </Box>
  )
}
